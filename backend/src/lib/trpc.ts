import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { type TrpcContext } from '..';

export const trpc = initTRPC.context<TrpcContext>().create({
  transformer: superjson,
});
