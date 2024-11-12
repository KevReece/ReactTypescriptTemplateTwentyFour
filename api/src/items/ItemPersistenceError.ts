import { Prisma } from "@prisma/client";
import AppError from "../AppError";
import { CreateItem } from "./Item";

export default class ItemPersistenceError extends AppError {
  constructor(prismaKnownError: Prisma.PrismaClientKnownRequestError, item: CreateItem) {
    const message = `Error persisting item (code:${prismaKnownError.code}): `
      + `message: ${prismaKnownError.message}, `
      + `item.text: '${item.text}'`;
    super(500, message);
  }
}
