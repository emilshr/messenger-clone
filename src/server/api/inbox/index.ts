import { mergeRouters } from "../trpc";
import { fetchInboxes } from "./fetch-inboxes";

export const inboxRouters = mergeRouters(fetchInboxes);
