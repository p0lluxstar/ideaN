import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { trpcRouter } from './router';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(
  '/trpc',
  createExpressMiddleware({
    router: trpcRouter,
  })
);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер запущен на http://localhost:3000');
});
