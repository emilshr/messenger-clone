import type { NextPage } from "next";
import { SideBarLayout } from "src/views/common/layouts/SideBarLayout";
import { PeopleContainerView } from "src/views/people/PeopleContainer.view";

const PeopleHome: NextPage = (_props) => {
  return (
    <SideBarLayout>
      <PeopleContainerView />
    </SideBarLayout>
  );
};

export default PeopleHome;
