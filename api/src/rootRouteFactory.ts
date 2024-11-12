import Router from 'express'
import ItemController from './items/ItemController';
import { validateRequest } from './validateRequest';
import { CreateItemSchema } from './items/Item';

export const createRootRouter = (controller: ItemController) => {
  const router = Router();

  router.get('/', controller.getItems);
  router.post('/', validateRequest({ body: CreateItemSchema }), controller.createItem);

  return router;
};
