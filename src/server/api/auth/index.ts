import { mergeRouters } from "../trpc";
import { loginRouter } from "./login";
import { signUpRouter } from "./sign-up";

export const authRouter = mergeRouters(loginRouter, signUpRouter);
