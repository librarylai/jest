export function promiseFetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('testData')
        }, 3000)
    })
}