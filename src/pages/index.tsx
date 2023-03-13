import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HomeView } from "src/views/home/Home.view";

const App: NextPage = () => {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      void router.push("/login");
    } else if (status === "authenticated") {
      void router.push("/thread");
    }
  }, [router, status]);

  return <HomeView />;
};

export default App;
