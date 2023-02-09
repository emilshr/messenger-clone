interface Props {
  onChange: (value: string) => void;
}

export const EmailInput = ({ onChange }: Props) => {
  return (
    <input
      type="email"
      className="flex w-1/2 max-w-[350px] justify-self-center rounded border border-gray-400 px-4 py-2 focus:border-blue-400"
      autoFocus
      onChange={(event) => {
        onChange(event.target.value);
      }}
      placeholder="Email address"
    />
  );
};
