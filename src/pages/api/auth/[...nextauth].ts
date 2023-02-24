import NextAuth, { type NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { hashSync, compareSync } from "bcrypt";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import { TRPCError } from "@trpc/server";
// import { api } from "../../../utils/api";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    FacebookProvider({
      clientId: env.FACEBOOK_CLIENT_ID,
      clientSecret: env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialProvider({
      credentials: {
        email: { label: "Email", placeholder: "Email address", type: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        console.log({ credentials });
        if (credentials) {
          const { email, password } = credentials;
          const foundUser = await prisma.user.findFirst({
            where: { email },
          });
          if (foundUser && foundUser.password) {
            if (compareSync(password, foundUser.password)) {
              return foundUser;
            }
          }
        }
        return null;
      },
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

export default NextAuth(authOptions);
