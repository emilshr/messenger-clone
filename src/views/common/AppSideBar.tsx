import { Sidebar } from "flowbite-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ChatIcon } from "../icons/ChatIcon";
import { useToggleSideBar } from "./custom-hooks/useToggleSidebar";

export const AppSideBar = () => {
  const { open, toggleSideBar } = useToggleSideBar();
  const { status } = useSession();
  const { pathname } = useRouter();
  console.debug({ pathname, open });
  if (status === "authenticated") {
    return (
      <div className="w-fit border-r border-r-gray-200">
        <Sidebar
          aria-label="Messenger clone side bar"
          collapseBehavior="collapse"
          collapsed={!open}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#"
                onClick={() => toggleSideBar()}
                icon={ChatIcon}
              >
                Chats
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    );
  }
  return <></>;
};
