import ItemService from "./ItemService";

describe('ItemService', () => {
  it('adds and gets from DB', async () => {
    const itemQueryService = new ItemService();

    const posted = await itemQueryService.add('test');
    const items = await itemQueryService.get();

    expect(posted).toBeTruthy();
    expect(items).toContain('test');
  });
});