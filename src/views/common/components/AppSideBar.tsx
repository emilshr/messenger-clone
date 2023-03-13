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

  return (
    <div className="flex max-h-screen w-fit flex-col border-r border-r-gray-200">
      <Sidebar
        aria-label="Messenger clone side bar"
        collapseBehavior="collapse"
        collapsed={!open}
        className="flex h-full flex-col"
      >
        <div className="flex h-full flex-col">
          <Sidebar.Items className="flex grow">
            <Sidebar.ItemGroup className="cursor-pointer">
              <Sidebar.Item
                active={currentRoute === "thread"}
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
                icon={HomeModernIcon}
                onClick={() => {
                  void router.push("/marketplace");
                }}
              >
                Marketplace
              </Sidebar.Item>
              <Sidebar.Item
                active={currentRoute === "archive"}
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
        </div>
      </Sidebar>
    </div>
  );
};
