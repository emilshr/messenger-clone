import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const fetchInboxes = createTRPCRouter({
  fetchInboxes: protectedProcedure.query(async ({ ctx }) => {
    const {
      prisma: { account },
      session,
    } = ctx;

    const { id } = session.user;
    const foundAccountAndMessages = await account.findFirst({
      where: { userId: id },
      include: { Inbox: true, InboxParticipants: true },
    });

    if (!foundAccountAndMessages) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return foundAccountAndMessages.Inbox;
  }),
});
