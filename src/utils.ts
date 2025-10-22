export function createList(items: string[], format: Function) {
  let itemList = [];
  for (let i = 0; i < items.length; i++) {
    itemList.push(format(i, items[i]));
  }
  return itemList;
}
