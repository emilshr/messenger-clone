import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import {
  Button,
  EmailInput,
  LoginPageHyperLinks,
  PasswordInput,
} from "@components";
import { useState } from "react";
const Home: NextPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <div className="grid w-full grid-cols-1 justify-center gap-2">
              <EmailInput
                onChange={(val) => {
                  setEmail(val);
                }}
              />
              <PasswordInput
                onChange={(val) => {
                  setPassword(val);
                }}
              />
            </div>
            <div className="flex">
              <Button
                title="Continue"
                onClick={async () => {
                  await signIn("credentials", {
                    email,
                    password,
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

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-black">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
