import { PrismaClient, Prisma } from "@prisma/client";
import ItemPersistenceError from "./ItemPersistenceError";
import { CreateItem, Item } from "./Item";

export default class ItemService {
  constructor(private prisma: PrismaClient) {}

  public async add(item: CreateItem): Promise<Item> {
    try {
      return await this.prisma.item.create({
        data: { text: item.text }
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new ItemPersistenceError(error, item);
      }
      throw error;
    }
  }
  
  public async get(): Promise<Item[]> {
    return await this.prisma.item.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}
