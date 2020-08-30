import {
    promiseFetchData
} from '../src/promise'
describe('Asynchronous async/await test', () => {
    test('promise test', async () => {
        const data = await promiseFetchData()
        expect(data).toBe('testData')
    })
})
describe('Asynchronous async/await test use resolves/rejects', () => {
    test('promise test', async () => {
        await expect(promiseFetchData()).resolves.toBe('testData')
    })
})