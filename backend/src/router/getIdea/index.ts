import { z } from 'zod';
// import { ideas } from '../../lib/ideas';
import { trpc } from '../../lib/trpc';

export const getIdeaRoute = trpc.procedure
  .input(
    z.object({
      ideaNick: z.string(),
    })
  )
  .query(async ({ ctx, input }) => {
    // const idea = ideas.find((idea) => idea.nick === input.ideaNick);
    // return { idea: idea || null };
    const idea = await ctx.prisma.idea.findUnique({
      where: {
        nick: input.ideaNick,
      },
    });

    return { idea };
  });
