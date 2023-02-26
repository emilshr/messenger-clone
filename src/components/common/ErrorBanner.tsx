interface Props {
  errorMessage?: string;
  errorTitle?: string;
  children?: React.ReactNode;
}

export const ErrorBanner = ({
  errorTitle = "Error",
  errorMessage,
  children,
}: Props) => {
  return (
    <div className="flex flex-col rounded-md bg-red-400 p-5 text-white">
      <div className="text-lg">{errorTitle}</div>
      {errorMessage && <div className="text-md">{errorMessage}</div>}
      {children}
    </div>
  );
};
