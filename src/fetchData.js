// 獲取資料函式
export function fetchData(callback) {
    let data = '我是資料.........'
    setTimeout(() => {
        callback(data)
    }, 3000)
}