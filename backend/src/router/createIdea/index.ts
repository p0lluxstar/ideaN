// import { ideas } from '../../lib/ideas';
import { trpc } from '../../lib/trpc';
import { zCreateIdeaTrpcInput } from './input';

export const createIdeaTrpcRoute = trpc.procedure
  .input(zCreateIdeaTrpcInput)
  .mutation(async ({ ctx, input }) => {
    // if (ideas.find((idea) => idea.nick === input.nick)) {
    //   throw Error('Idea with this nick already exists');
    // }
    // ideas.unshift(input);
    // return true;

    const exIdea = await ctx.prisma.idea.findUnique({
      where: {
        nick: input.nick,
      },
    });

    if (exIdea) {
      throw Error('Idea with this nick already exists');
    }

    await ctx.prisma.idea.create({
      data: input,
    });

    return true;
  });
