import { inboxRouters } from "./inbox";
import { peopleRouters } from "./people";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  inbox: inboxRouters,
  people: peopleRouters,
});

// export type definition of API
export type AppRouter = typeof appRouter;
