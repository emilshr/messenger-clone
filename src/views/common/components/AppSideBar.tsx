import { Sidebar } from "flowbite-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ArchiveBoxIcon } from "../../icons/ArchiveBoxIcon";
import { ChatBubbleOvalLeftIcon } from "../../icons/ChatBubbleIcon";
import { HomeModernIcon } from "../../icons/HomeModernIcon";
import { UserGroupIcon } from "../../icons/UserGroupIcon";
import { ViewColumnsIcon } from "../../icons/ViewColumnsIcon";
import { UserPreferencesDropDown } from "../../user-preferences/UserPreferencesDropDown";
import { useToggleSideBar } from "../custom-hooks/useToggleSidebar";

export const AppSideBar = () => {
  const { open, toggleSideBar, currentRoute } = useToggleSideBar();
  const router = useRouter();

  useEffect(() => {
    console.debug("re render");
  });

  return (
    <div className="flex max-h-screen w-fit border-r border-r-gray-200">
      <Sidebar
        aria-label="Messenger clone side bar"
        collapseBehavior="collapse"
        collapsed={!open}
        className="flex"
      >
        <Sidebar.Items className="h-[90%]">
          <Sidebar.ItemGroup className="cursor-pointer">
            <Sidebar.Item
              active={currentRoute === "thread"}
              href="#"
              onClick={() => {
                void router.push("/thread");
              }}
              icon={ChatBubbleOvalLeftIcon}
              label="18"
            >
              Chats
            </Sidebar.Item>
            <Sidebar.Item
              active={currentRoute === "people"}
              href="#"
              onClick={() => {
                void router.push("/people");
              }}
              icon={UserGroupIcon}
              disabled={true}
            >
              People
            </Sidebar.Item>
            <Sidebar.Item
              active={currentRoute === "marketplace"}
              href="#"
              onClick={() => {
                void router.push("/marketplace");
              }}
              icon={HomeModernIcon}
            >
              Marketplace
            </Sidebar.Item>
            <Sidebar.Item
              active={currentRoute === "archive"}
              href="#"
              onClick={() => {
                void router.push("/archived");
              }}
              icon={ArchiveBoxIcon}
            >
              Archived
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.Items>
          <Sidebar.ItemGroup className="cursor-pointer">
            <UserPreferencesDropDown />
            <Sidebar.Item
              icon={ViewColumnsIcon}
              onClick={() => toggleSideBar()}
              label="Collapse"
            />
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
