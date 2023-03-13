import Image from "next/image";
import type { Account } from "@prisma/client";
import { Avatar } from "flowbite-react";

interface Props {
  data: (Account & {
    user: {
      image: string | null;
      name: string | null;
    };
  })[];
}

export const FriendsList = ({ data }: Props) => {
  return (
    <div className="flex flex-col">
      {data.map((account) => (
        <div className="flex gap-y-2" key={account.id}>
          <Avatar
            alt={account.user.name || "Username"}
            img={(props) => (
              <Image
                alt={props.alt || "Your profile picture"}
                src={account.user.image || "/"}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            rounded={true}
            status="online"
            statusPosition="bottom-right"
          />
        </div>
      ))}
    </div>
  );
};
