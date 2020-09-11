import {
    checkIncludeDiscountItemList
} from './checkIncludeDiscountItemList'
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

// 計算總金額版本二
export function calculateShopTotalUseMock(items) {
    return items.reduce((acl, cur) => {
        let itemTotal = (cur.price * cur.count)
        if (checkIncludeDiscountItemList(cur.name)) {
            itemTotal = itemTotal * 0.8 // 如果是打折商品，就打8折
        }
        return acl + itemTotal
    }, 0)
}