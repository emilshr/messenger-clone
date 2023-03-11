import type { NextPage } from "next";
import { SideBarLayout } from "src/views/common/layouts/SideBarLayout";
import { ThreadsContainer } from "src/views/thread/ThreadsContainer.view";

const PeopleHome: NextPage = (_props) => {
  return (
    <SideBarLayout>
      People home
      <ThreadsContainer />
    </SideBarLayout>
  );
};

export default PeopleHome;
