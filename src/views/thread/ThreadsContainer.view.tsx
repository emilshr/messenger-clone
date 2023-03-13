import { Card } from "flowbite-react";
import { api } from "../../utils/api";

export const ThreadsContainer = () => {
  const { isLoading, data = [] } = api.inbox.fetchInboxes.useQuery();
  if (isLoading) {
    return <Card>Loading</Card>;
  }

  return (
    <>
      {data.map((thread) => (
        <Card key={thread.id}>{thread.id}</Card>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const res = await api.inbox.fetchInboxes.useQuery();
}
