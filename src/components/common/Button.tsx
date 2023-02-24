import { useState } from "react";
import classNames from "classnames";
import { LoadingIndicator } from "./LoadingIndicator";

interface Props {
  title: string;
  onClick: () => Promise<void>;
  disabled?: boolean;
  error?: boolean;
}

export const Button = ({ title, onClick, disabled, error }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <button
      type="submit"
      className={classNames(
        "rounded-full  px-6 py-2 text-white  focus:ring-1 ",
        error
          ? "bg-red-500 focus:bg-red-400 focus:ring-red-600"
          : "bg-blue-500 focus:bg-blue-400 focus:ring-blue-500"
      )}
      onClick={(event) => {
        event.preventDefault();
        setLoading(true);
        onClick()
          .then(() => {
            console.log("Button clicked");
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }}
      disabled={disabled}
    >
      <div className="flex items-center justify-center">
        {loading && <LoadingIndicator />}
        <div className="flex">{title}</div>
      </div>
    </button>
  );
};
