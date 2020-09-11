// 判斷是否為打折品項
export function checkIncludeDiscountItemList(name) {
    let discountList = ['衣服', '鞋子']
    return discountList.includes(name)
}