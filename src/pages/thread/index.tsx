import type { NextPage } from "next";
import { SideBarLayout } from "src/views/common/layouts/SideBarLayout";
import { ThreadsContainer } from "src/views/thread/ThreadsContainer.view";

const ThreadHome: NextPage = (_props) => {
  return (
    <SideBarLayout>
      Thread home
      <ThreadsContainer />
    </SideBarLayout>
  );
};

export default ThreadHome;
