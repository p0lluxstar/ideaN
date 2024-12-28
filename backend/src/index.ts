import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { trpcRouter } from './trps';
import cors from 'cors';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(
  '/trpc',
  createExpressMiddleware({
    router: trpcRouter,
  })
);
app.listen(PORT, () => console.log('Сервер запущен на http://localhost:3000'));
