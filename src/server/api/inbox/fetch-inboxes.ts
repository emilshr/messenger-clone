import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const fetchInboxes = createTRPCRouter({
  fetchInboxes: publicProcedure.query(async ({ ctx }) => {
    const {
      prisma: { account },
      session,
    } = ctx;
    if (!session || !session.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    console.debug({ session });
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
