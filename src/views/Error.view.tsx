import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Button, ErrorBanner, LoginPageHyperLinks } from "@components";
import { useRouter } from "next/router";

export const ErrorView: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const { error } = query;
  return (
    <>
      <Head>
        <title>Messenger clone</title>
        <meta
          name="description"
          content="A clone of Meta messenger developed by @emilshr"
        />
      </Head>
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
                Uh, oh! An error occurred
              </h2>
            </div>

            <ErrorBanner errorMessage={error as string} />

            <div className="flex gap-8">
              <div className="flex">
                <Button
                  onClick={async () => {
                    await router.push("/");
                  }}
                  title="Go to messenger clone.com"
                />
              </div>
              <div className="flex">
                <Button
                  onClick={async () => {
                    await router.push("/help");
                  }}
                  title="Visit our help center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-4">
          <LoginPageHyperLinks />
        </div>
      </main>
    </>
  );
};
