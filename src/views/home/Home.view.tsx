import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { Button, LoginPageHyperLinks } from "@components";
import { useRouter } from "next/router";
import { SideBarLayout } from "../common/layouts/SideBarLayout";

export const HomeView: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Messenger clone</title>
        <meta
          name="description"
          content="A clone of Meta messenger developed by @emilshr"
        />
      </Head>
      <SideBarLayout>
        <main className="flex h-screen flex-col items-center justify-center">
          <div className="flex h-full justify-between">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
              <div className="grid grid-cols-1 gap-4 md:gap-8">
                <Image
                  src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg"
                  width={75}
                  height={75}
                  alt="Messenger clone"
                  className="aspect-square"
                />
              </div>
              <div className="grid grid-cols-1">
                <h2 className="text-center text-4xl font-medium">
                  Connect with your favourite people
                </h2>
              </div>
              <div>
                <Button
                  onClick={async () => {
                    const { url } = await signOut({
                      callbackUrl: "/",
                      redirect: false,
                    });
                    await router.push(url);
                  }}
                  title="Sign out"
                  pill
                />
              </div>
            </div>
          </div>
          <div className="flex py-4">
            <LoginPageHyperLinks />
          </div>
        </main>
      </SideBarLayout>
    </>
  );
};
