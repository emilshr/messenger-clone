import { useState } from "react";
import type { ButtonProps } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { Button as FlowBiteButton } from "flowbite-react";

interface Props extends Omit<ButtonProps, "onClick"> {
  title: string;
  onClick: () => Promise<void>;
  disabled?: boolean;
  error?: boolean;
  loadingText?: string;
}

export const Button = ({
  title,
  onClick,
  disabled,
  error,
  color,
  loadingText = "Loading ...",
  ...restProps
}: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <FlowBiteButton
      type="submit"
      onClick={(event) => {
        event.preventDefault();
        setLoading(true);
        onClick()
          .catch((err) => {
            console.error(`Error occurred`, err);
          })
          .finally(() => {
            setLoading(false);
          });
      }}
      color={error ? "red" : color}
      disabled={disabled}
      {...restProps}
    >
      <div className="flex items-center justify-center gap-x-4">
        {loading ? (
          <>
            <div className="mr-1">
              <Spinner light size="sm" />
            </div>
            {loadingText}
          </>
        ) : (
          <div className="flex">{title}</div>
        )}
      </div>
    </FlowBiteButton>
  );
};
