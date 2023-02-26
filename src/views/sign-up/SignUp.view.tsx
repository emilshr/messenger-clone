import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import {
  Button,
  EmailInput,
  LoginPageHyperLinks,
  PasswordInput,
} from "@components";
import { api } from "src/utils/api";
import { useEffect, useReducer } from "react";
import { TextField } from "src/components/common/TextField";

interface ISignUpState {
  email: string;
  fullName: string;
  password: string;
}

const initialState: ISignUpState = {
  email: "",
  fullName: "",
  password: "",
};

interface ISignUpAction {
  type: SignUpActionType;
  value: string;
}

type SignUpActionType = "SET_FULL_NAME" | "SET_EMAIL" | "SET_PASSWORD";

function signUpReducer(state: ISignUpState, action: ISignUpAction) {
  const { type, value } = action;
  switch (type) {
    case "SET_EMAIL":
      return { ...state, email: value };
    case "SET_FULL_NAME":
      return { ...state, fullName: value };
    case "SET_PASSWORD":
      return { ...state, password: value };
    default:
      return state;
  }
}

export const SignUpView: NextPage = () => {
  const { error, isError, isLoading, mutateAsync, failureReason } =
    api.auth.signUp.useMutation();

  const [state, dispatch] = useReducer(signUpReducer, initialState);

  useEffect(() => {
    console.log("Hit an error", error, failureReason);
    return () => {
      console.log("un mount");
    };
  }, [isError, error, failureReason]);

  return (
    <>
      <Head>
        <title>Sign up</title>
        <meta
          name="Sign up"
          content="Sign up for the best messenger app in the world"
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
            <div className="grid grid-cols-1 items-center justify-center">
              <h2 className="text-center text-4xl font-medium">
                Connect with your favourite people
              </h2>
            </div>
            <div className="grid w-full grid-cols-1 justify-center gap-2">
              <TextField
                type="text"
                onChange={(event) => {
                  event.preventDefault();
                  dispatch({
                    type: "SET_FULL_NAME",
                    value: event.target.value,
                  });
                }}
                placeholder="Full name"
              />
              <EmailInput
                onChange={(val) => {
                  dispatch({
                    type: "SET_EMAIL",
                    value: val,
                  });
                }}
              />
              <PasswordInput
                onChange={(val) => {
                  dispatch({
                    type: "SET_PASSWORD",
                    value: val,
                  });
                }}
              />
            </div>
            <div className="flex">
              <Button
                onClick={async () => {
                  await mutateAsync({
                    ...state,
                  });
                }}
                title="Sign up"
                disabled={isLoading}
                error={isError}
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
