/**
 * 依據傳入的物件和路徑傳回找到的結果
 * 若傳入路徑中包含array，且路徑後一位並非指定array index，則會遞迴執行每一元素
 * 若傳入路徑中包含array，且路徑後一位為array index(e.g. '0', 2 , 3 etc..)
 *
 * @export
 * @param {*} obj 物件
 * @param {*} path 路徑
 * @returns array
 */
export function getObjectPropertyValueByKey(obj, path) {
    let result = []
    let forEachPath

    function takeDeep(currentObject, currentPath) {
        currentPath = [...currentPath]
        let cur = currentPath[0]
        if (Array.isArray(currentObject)) {
            // 設定取哪一筆時，ex. [languages, 0, name] 當走到 0 時會進入
            if (+cur >= 0) {
                currentPath.shift()
                return takeDeep(currentObject[cur], currentPath)
            } else {
                forEachPath = currentPath
                currentObject.forEach((item) => takeDeep(item, forEachPath))
            }
        } else {
            if (currentObject) {
                if (typeof currentObject[cur] === 'object') {
                    currentPath.shift()
                    return takeDeep(currentObject[cur], currentPath)
                } else {
                    result.push(currentObject[cur])
                }
            } else {
                return result
            }
        }
    }
    takeDeep(obj, path)
    return result.join(' , ')
}