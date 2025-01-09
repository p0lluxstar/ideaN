import { trpc } from '../lib/trpc';
import { createIdeaTrpcRoute } from './createIdea';
import { getIdeaRoute } from './getIdea';
import { getIdeasRoute } from './getIdeas';
import { getMeTrpcRoute } from './getMe';
import { signInTrpcRoute } from './signIn';
import { signUpTrpcRoute } from './signUp';

export const trpcRouter = trpc.router({
  getIdea: getIdeaRoute,
  getIdeas: getIdeasRoute,
  createIdea: createIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  signIn: signInTrpcRoute,
  getMe: getMeTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
