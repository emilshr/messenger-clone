import type { NextPage } from "next";
import { useRouter } from "next/router";

const ThreadContainer: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  console.debug({ query });
  return <>Thread id {JSON.stringify(query)}</>;
};

export default ThreadContainer;
