interface Props {
  count: number;
}

export const ContactsCount = ({ count }: Props) => {
  return (
    <div className="flex text-xs font-light text-gray-400">
      Active contacts ({count})
    </div>
  );
};
