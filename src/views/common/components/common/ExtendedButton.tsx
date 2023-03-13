import { Spinner } from "flowbite-react";
import { useState } from "react";

interface Props {
  title: string;
  onClick: () => void;
}

export const ExtendedButton = ({ onClick, title }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <div
      className="flex h-full w-full cursor-pointer items-center justify-center border-t border-t-gray-300 py-6 hover:bg-gray-300"
      onClick={(event) => {
        event.preventDefault();
        setLoading(true);
        onClick();
        setLoading(false);
      }}
    >
      {loading ? (
        <>
          <div className="mr-2">
            <Spinner light />
          </div>
          Loading ...
        </>
      ) : (
        <>{title}</>
      )}
    </div>
  );
};
