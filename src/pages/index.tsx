import type {
  NextPage,
  InferGetServerSidePropsType,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HomeView } from "src/views/home/Home.view";

interface Props {
  name: string;
}

const App: NextPage<Props> = (
  _props: InferGetServerSidePropsType<typeof getStaticProps>
) => {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      void router.push("/login");
    }
  }, [router, status]);

  return (
    <div>
      <HomeView />
    </div>
  );
};

export default App;

export const getStaticProps: GetStaticProps<Props> = (
  _context: GetStaticPropsContext
) => {
  return {
    props: {
      name: "Emil",
    },
  };
};
