import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SideBarLayout } from "src/views/common/layouts/SideBarLayout";

const MarketplaceThreadContainer: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  return (
    <SideBarLayout>
      Market place thread id {JSON.stringify(query)}
    </SideBarLayout>
  );
};

export default MarketplaceThreadContainer;
