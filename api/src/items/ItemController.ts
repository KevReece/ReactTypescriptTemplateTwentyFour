import { Request, Response, NextFunction } from 'express';
import ItemService from './ItemService';
import { CreateItemSchema } from './Item';

export default class ItemController {
  constructor(private itemService: ItemService) {}

  getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await this.itemService.get();
      res.status(200).json({
        data: items
      });
    } catch (error) {
      next(error);
    }
  };

  createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = CreateItemSchema.parse(req.body);
      const item = await this.itemService.add(validatedData);
      res.status(201).json({
        data: item
      });
    } catch (error) {
      next(error);
    }
  };
}