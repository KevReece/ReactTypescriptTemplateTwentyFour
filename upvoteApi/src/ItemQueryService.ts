import { PrismaClient } from "@prisma/client";

class ItemQueryService {
  public async get() {
    const prismaClient = new PrismaClient();
    return await prismaClient.item.findMany();
  }
}

export default ItemQueryService;