import { trpc } from '../lib/trpc';
import { createIdeaTrpcRoute } from './createIdea';
import { getIdeaRoute } from './getIdea';
import { getIdeasRoute } from './getIdeas';

export const trpcRouter = trpc.router({
  getIdea: getIdeaRoute,
  getIdeas: getIdeasRoute,
  createIdea: createIdeaTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
