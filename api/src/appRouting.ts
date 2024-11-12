import { Express } from 'express';
import { PrismaClient } from '@prisma/client';
import ItemService from './items/ItemService';
import ItemController from './items/ItemController';
import { createRootRouter } from './rootRouteFactory';

export const applyRoutes = (app: Express, prisma: PrismaClient) => {
  const itemService = new ItemService(prisma);
  const itemController = new ItemController(itemService);
  app.use('/', createRootRouter(itemController));
};
