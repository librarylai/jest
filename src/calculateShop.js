// 計算購物總金額
export function calculateShopTotal(items, discountFunction) {
    return items.reduce((acl, cur) => {
        let itemTotal = (cur.price * cur.count)
        if (discountFunction(cur.name)) {
            itemTotal = itemTotal * 0.8 // 如果是打折商品，就打8折
        }
        return acl + itemTotal
    }, 0)
}
// 判斷是否為打折品項
export function discountItemList(name) {
    let discountList = ['衣服', '鞋子']
    return discountList.includes(name)
}