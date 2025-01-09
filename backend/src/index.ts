import { type inferAsyncReturnType } from '@trpc/server';
import type * as trpcExpress from '@trpc/server/adapters/express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { expressHandler } from 'trpc-playground/handlers/express';
import { type AppContext, createAppContext } from './lib/ctx';
import { applyPassportToExpressApp } from './lib/passport';
import { trpcRouter } from './router';
import { type ExpressRequest } from './utils/types';

const getCreateTrpcContext =
  (appContext: AppContext) =>
  ({ req }: trpcExpress.CreateExpressContextOptions) => ({
    ...appContext,
    me: (req as ExpressRequest).user || null,
  });

export type TrpcContext = inferAsyncReturnType<ReturnType<typeof getCreateTrpcContext>>;

void (async () => {
  let ctx: AppContext = createAppContext();

  try {
    ctx = createAppContext();
    const app = express();

    const PORT = 3000;

    applyPassportToExpressApp(app, ctx);
    app.use(cors());
    app.use(
      '/trpc',
      createExpressMiddleware({
        router: trpcRouter,
        createContext: getCreateTrpcContext(ctx),
      })
    );
    app.use(
      '/trpc-playground',
      await expressHandler({
        trpcApiEndpoint: '/trpc',
        playgroundEndpoint: '/trpc-playground',
        router: trpcRouter,
        request: {
          superjson: true,
        },
      })
    );
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log('Сервер запущен на http://localhost:3000');
    });
  } catch (error) {
    console.error(error);
    await ctx?.stop();
  }
})();
