import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { type AppContext, createAppContext } from './lib/ctx';
import { trpcRouter } from './router';

void (async () => {
  let ctx: AppContext = createAppContext();

  try {
    ctx = createAppContext();
    const app = express();

    const PORT = 3000;

    app.use(cors());
    app.use(
      '/trpc',
      createExpressMiddleware({
        router: trpcRouter,
        createContext: () => ctx,
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
