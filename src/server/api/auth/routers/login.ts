import { TRPCError } from "@trpc/server";
import { hashSync } from "bcrypt";
import { env } from "src/env/server.mjs";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../../trpc";

export const loginRouter = createTRPCRouter({
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      const { email, password } = input;
      const {
        prisma: { account },
      } = ctx;
    }),
});
