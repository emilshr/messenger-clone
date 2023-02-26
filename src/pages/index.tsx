import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HomeView } from "src/views/home/Home.view";

const App: NextPage = (props) => {
  const { status, data } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log({ status, data });
    if (status === "unauthenticated") {
      router
        .push("/login")
        .then(() => {
          console.log("Route changed");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [router, status]);

  return <HomeView />;
};

export default App;
