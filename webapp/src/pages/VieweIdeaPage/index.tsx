import { useParams } from 'react-router-dom';
import { Segment } from '../../components/Segment';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';

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
    <Segment title={data.idea.name} description={data.idea.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  );
};
