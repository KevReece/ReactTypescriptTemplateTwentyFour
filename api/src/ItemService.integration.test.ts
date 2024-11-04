import ItemService from "./ItemService";

const generateRandomString = (length: number): string => {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const arrayLikeArrayToGenerate = { length };
  const generateRandomChar = () => possibleChars.charAt(
    Math.floor(Math.random() * possibleChars.length));
  return Array.from(arrayLikeArrayToGenerate, generateRandomChar).join('');
}

describe('ItemService', () => {
  it('adds and gets from DB', async () => {
    const itemQueryService = new ItemService();
    const itemText = generateRandomString(8);

    const posted = await itemQueryService.add(itemText);
    const items = await itemQueryService.get();

    expect(posted).toBeTruthy();
    const lastItemText = items?.at(-1)?.text;
    expect(lastItemText).toEqual(itemText);
  });
});