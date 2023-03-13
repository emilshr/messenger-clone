import { createTRPCRouter, protectedProcedure } from "../trpc";

export const fetchFriends = createTRPCRouter({
  fetchFriends: protectedProcedure.query(async ({ ctx }) => {
    const {
      prisma: { accountFriendship, account },
      session,
    } = ctx;

    const { id } = session.user;

    const foundFriendships = await accountFriendship.findMany({
      include: { account: true },
      where: {
        account: { userId: id },
        friend_request_status: "REQUEST_ACCEPTED",
      },
    });

    const accountIds = foundFriendships.map(
      (friendship) => friendship.to_account_id
    );

    const foundAccounts = await account.findMany({
      include: {
        user: {
          select: { image: true, name: true },
        },
      },
      where: { id: { in: accountIds } },
    });

    return foundAccounts;
  }),
});
