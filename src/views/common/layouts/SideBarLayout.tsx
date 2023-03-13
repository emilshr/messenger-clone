import type { PropsWithChildren } from "react";
import { AppSideBar } from "../components/AppSideBar";

export const SideBarLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-w-screen flex h-screen max-h-screen">
      <AppSideBar />
      <div className="flex max-h-full w-full flex-row pt-2">
        <div className="h-full w-4/12 border-r border-r-gray-200">
          {children}
        </div>
        <div className="max-h-full w-full overflow-y-scroll pl-2">
          Chat component
        </div>
      </div>
    </div>
  );
};
