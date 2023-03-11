import Link from "next/link";

export const LoginPageHyperLinks = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-center gap-x-8 gap-y-1 text-center text-[15px] text-gray-400 sm:grid-cols-6">
      <Link href="/sign-up">Not on facebook?</Link>
      <Link href="#">Forgotten password</Link>
      <Link href="#">Privacy</Link>
      <Link href="#">Policy</Link>
      <Link href="#">Terms</Link>
      <span>@emilshr</span>
    </div>
  );
};
