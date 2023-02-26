import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

import { Button, LoginPageHyperLinks } from "@components";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LoginWithFacebook: NextPage = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router
        .push("/")
        .then(() => {
          console.log("Route changed");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [status, router]);

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
                Connect with your favourite people
              </h2>
            </div>

            <div className="flex">
              <Button
                title="Continue with facebook"
                onClick={async () => {
                  await signIn("facebook", {
                    callbackUrl: "/",
                  });
                }}
              />
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
