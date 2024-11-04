import { PrismaClient, Item } from "@prisma/client";


class ItemService {
  private prismaClient = new PrismaClient();

  public async add(text: string): Promise<Item> {
    return await this.prismaClient.item.create({data: { text: text }});
  }
  
  public async get(): Promise<Item[]> {
    return await this.prismaClient.item.findMany();
  }
}

export default ItemService;