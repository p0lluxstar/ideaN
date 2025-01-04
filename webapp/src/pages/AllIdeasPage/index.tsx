import { Link } from 'react-router-dom';
import { Segment } from '../../components/Segment';
import { getViewIdeaRoute } from '../../lib/rotutes';
import { trpc } from '../../lib/trpc';
import css from './index.module.scss';

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Segment title="All Ideas">
      <div className={css.ideas}>
        {data.ideas.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <Segment
              title={
                <Link className={css.ideaLink} to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                  {idea.name}
                </Link>
              }
              size={2}
              description={idea.description}
            ></Segment>
          </div>
        ))}
      </div>
    </Segment>
  );
};
