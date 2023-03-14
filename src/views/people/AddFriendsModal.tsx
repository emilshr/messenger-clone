import { Button } from "@components";
import { Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { api } from "src/utils/api";

export const AddFriendsModal = () => {
  const { data, error, mutateAsync } = api.people.addFriend.useMutation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.debug("re render");
  });

  return (
    <>
      <div className="space-y-6 border-t border-t-gray-200 px-6 pb-4 pt-4 sm:pb-6 lg:px-8 xl:pb-8">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Friend's email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@company.com"
            required
            autoFocus
            onChange={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="flex w-full justify-center">
          <Button
            type="submit"
            onClick={async () => {
              await mutateAsync({ email: "" });
            }}
            title="Send friend request"
          />
        </div>
      </div>
    </>
  );
};
