import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './appErrorHandler';
import { applyAsyncProcessExit } from './appTearDown';
import { applyRoutes } from './appRouting';

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());
applyRoutes(app, prisma);
app.use(errorHandler);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

applyAsyncProcessExit(prisma);
