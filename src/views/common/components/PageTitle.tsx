interface Props {
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <div className="flex text-2xl">{title}</div>;
};
