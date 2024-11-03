import ItemQueryService from "./ItemQueryService";

describe('ItemQueryService', () => {
  it('gets from DB', () => {
    const itemQueryService = new ItemQueryService();

    const items = itemQueryService.get();

    expect(items).toContain("test");
  });
});