interface Props {
  onChange: (password: string) => void;
}

export const PasswordInput = ({ onChange }: Props) => {
  return (
    <input
      type="password"
      className="flex w-1/2 max-w-[350px] justify-self-center rounded border border-gray-400 px-4 py-2 focus:border-blue-400"
      onChange={(event) => {
        onChange(event.target.value);
      }}
      placeholder="Password"
    />
  );
};
