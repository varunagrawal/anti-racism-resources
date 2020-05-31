export function createList(items, format) {
    let itemList = []
    for (let i = 0; i < items.length; i++) {
        itemList.push(format(items[i]))
    }
    return itemList
}
