// import _ from 'lodash';
// import { ideas } from '../../lib/ideas';
import { trpc } from '../../lib/trpc';

export const getIdeasRoute = trpc.procedure.query(async ({ ctx }) => {
  // return { ideas: ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description'])) };
  const ideas = await ctx.prisma.idea.findMany({
    select: {
      id: true,
      nick: true,
      name: true,
      description: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return { ideas };
});
