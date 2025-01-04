import { useParams } from 'react-router-dom';
import { trpc } from '../../lib/trpc';

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string };

  const { data, error, isLoading, isError } = trpc.getIdea.useQuery({ ideaNick });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data.idea) {
    return <span>Idea not found</span>;
  }

  return (
    <div>
      <h1>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  );
};
