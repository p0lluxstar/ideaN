import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { trpcRouter } from './trps';

const app = express();

const PORT = 3000;

app.use(
  '/trpc',
  createExpressMiddleware({
    router: trpcRouter,
  })
);
app.listen(PORT, () => console.log('Сервер запущен на http://localhost:3000'));
