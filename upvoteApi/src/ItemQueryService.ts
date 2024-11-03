import { PrismaClient } from "@prisma/client";

class ItemQueryService {
  public get() {
    const prismaClient = new PrismaClient();
    return prismaClient.items.all();
  }
}

export default ItemQueryService;