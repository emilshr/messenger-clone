import { mergeRouters } from "../trpc";
import { addFriend } from "./add-friend";
import { fetchFriends } from "./fetch-friends";

export const peopleRouters = mergeRouters(fetchFriends, addFriend);
