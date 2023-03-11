import { TRPCError } from "@trpc/server";
import { hashSync } from "bcrypt";
import { env } from "src/env/server.mjs";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const signUpRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        fullName: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { prisma } = ctx;
      const { email, fullName, password } = input;
      const foundUser = await prisma.user.findFirst({ where: { email } });
      if (foundUser) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Email already exists",
        });
      }
      const hashedPassword = hashSync(password, Number(env.SALT_ROUNDS));
      const createdUser = await prisma.user.create({
        data: { email, name: fullName, password: hashedPassword },
        include: {
          accounts: true,
        },
      });
      const { id } = createdUser;
      const createdAccount = await prisma.account.create({
        data: {
          provider: "credentials",
          providerAccountId: "credentials-provider",
          type: "credentials",
          userId: id,
        },
      });

      return createdAccount;
    }),
});
