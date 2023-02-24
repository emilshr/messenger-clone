import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const TextField = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className="flex w-1/2 max-w-[350px] justify-self-center rounded border border-gray-400 px-4 py-2 focus:border-blue-400"
      {...props}
    />
  );
};
