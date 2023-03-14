import { useState } from "react";
import { api } from "src/utils/api";
import { ExtendedButton } from "../common/components/common";
import { PageTitle } from "../common/components/PageTitle";
import { AddFriendsModal } from "./AddFriendsModal";
import { ContactsCount } from "./ContactsCount";
import { FriendsList } from "./FriendsList";
import { FriendsListSkeleton } from "./FriendsListSkeleton";

export const PeopleContainerView = () => {
  const { data = [], isLoading } = api.people.fetchFriends.useQuery();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex h-full flex-col gap-y-2 font-semibold">
        <div className="flex h-[92%] flex-col px-2">
          <PageTitle title="People" />
          <ContactsCount count={data.length} />
          <div className=" flex overflow-y-scroll pt-4">
            <div className="flex w-full flex-col">
              {isLoading ? (
                <FriendsListSkeleton />
              ) : (
                <FriendsList data={data} />
              )}
            </div>
          </div>
        </div>
        {open && <AddFriendsModal />}
        <div className="flex h-[8%] flex-col">
          <ExtendedButton
            title="Add friends"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </div>
    </>
  );
};
