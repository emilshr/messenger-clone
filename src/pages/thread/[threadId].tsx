import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SideBarLayout } from "src/views/common/layouts/SideBarLayout";

const ThreadContainer: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  console.debug({ query });
  return <SideBarLayout>Thread id {JSON.stringify(query)}</SideBarLayout>;
};

export default ThreadContainer;
