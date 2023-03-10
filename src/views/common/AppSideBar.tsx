import { Sidebar } from "flowbite-react";
import { useRouter } from "next/router";
import { ArchiveBoxIcon } from "../icons/ArchiveBoxIcon";
import { ChatBubbleOvalLeftIcon } from "../icons/ChatBubbleIcon";
import { HomeModernIcon } from "../icons/HomeModernIcon";
import { UserGroupIcon } from "../icons/UserGroupIcon";
import { useToggleSideBar } from "./custom-hooks/useToggleSidebar";

export const AppSideBar = () => {
  const { open, toggleSideBar, currentRoute } = useToggleSideBar();
  const router = useRouter();

  return (
    <div className="max-h-screen w-fit border-r border-r-gray-200">
      <Sidebar
        aria-label="Messenger clone side bar"
        collapseBehavior="collapse"
        collapsed={!open}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              active={currentRoute === "thread"}
              href="#"
              onClick={() => {
                void router.push("/thread/asd");
              }}
              icon={ChatBubbleOvalLeftIcon}
            >
              Chats
            </Sidebar.Item>
            <Sidebar.Item
              active={currentRoute === "people"}
              href="#"
              onClick={() => toggleSideBar()}
              icon={UserGroupIcon}
            >
              People
            </Sidebar.Item>
            <Sidebar.Item
              active={currentRoute === "marketplace"}
              href="#"
              onClick={() => toggleSideBar()}
              icon={HomeModernIcon}
            >
              Marketplace
            </Sidebar.Item>
            <Sidebar.Item
              active={currentRoute === "archive"}
              href="#"
              onClick={() => toggleSideBar()}
              icon={ArchiveBoxIcon}
            >
              Archive
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
