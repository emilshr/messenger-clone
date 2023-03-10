import Image from "next/image";
import { Avatar, Dropdown } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const UserPreferencesDropDown = () => {
  const { data } = useSession();
  useEffect(() => {
    console.debug({ data });
  });
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img={(props) => (
            <Image
              alt={props.alt || "Your profile picture"}
              src={data?.user?.image || ""}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          rounded={true}
          status="online"
          statusPosition="bottom-right"
        />
      }
      arrowIcon={false}
      inline={true}
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};
