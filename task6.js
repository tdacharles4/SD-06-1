function itemList(item, qty){
    this.item = item,
    this.qty = qty
}

const listLimit = process.argv[2]
const listArray = []

for (i=0;i<listLimit*2;i+=2) {
    itemName = process.argv[i+3],
    itemQty = process.argv[i+4],
    itemly = new itemList(itemName, itemQty)
    listArray.push(itemly)
}

console.log(listArray)