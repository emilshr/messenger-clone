import type { PropsWithChildren } from "react";
import { AppSideBar } from "../AppSideBar";

export const SideBarLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-w-screen flex h-screen max-h-screen">
      <AppSideBar />
      <div className="max-h-full w-full overflow-y-scroll">{children}</div>
    </div>
  );
};
