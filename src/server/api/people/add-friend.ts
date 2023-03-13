import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const addFriend = createTRPCRouter({
  addFriend: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const {
        prisma: { accountFriendship, account },
        session: {
          user: { id },
        },
      } = ctx;
      const { email } = input;

      const foundAccount = await account.findFirstOrThrow({
        include: { user: { select: { email: true } } },
        where: { user: { email } },
      });

      const foundFriendship = await accountFriendship.findFirst({
        include: { account: { select: { userId: true } } },
        where: { account: { userId: id }, to_account_id: foundAccount.id },
      });

      if (foundFriendship) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "A request is already pending!",
        });
      }

      const userAccount = await account.findFirstOrThrow({
        where: { userId: id },
      });
      const createdFriendship = await accountFriendship.create({
        data: {
          friend_request_status: "REQUEST_SENT",
          request_sent_time: new Date(),
          to_account_id: foundAccount.id,
          from_account_id: userAccount.id,
        },
      });
      return createdFriendship;
    }),
});
