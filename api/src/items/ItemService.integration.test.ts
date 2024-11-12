import { PrismaClient } from "@prisma/client";
import ItemService from "./ItemService";
import { CreateItem } from "./Item";

const generateRandomString = (length: number): string => {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const arrayLikeArrayToGenerate = { length };
  const generateRandomChar = () => possibleChars.charAt(
    Math.floor(Math.random() * possibleChars.length));
  return Array.from(arrayLikeArrayToGenerate, generateRandomChar).join('');
}

describe('ItemService', () => {

  let prismaClient: PrismaClient;

  beforeEach(() => {
    prismaClient = new PrismaClient();
  })

  it('adds and gets from DB', async () => {
    const itemQueryService = new ItemService(prismaClient);
    const item: CreateItem = { text: generateRandomString(8) };

    const posted = await itemQueryService.add(item);
    const items = await itemQueryService.get();

    expect(posted).toBeTruthy();
    const firstItemText = items?.at(0)?.text;
    expect(firstItemText).toEqual(item.text);
  });
});