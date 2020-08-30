import {
    promiseFetchData
} from '../src/promise'
describe('Asynchronous promise test', () => {
    test('promise test', () => {
        return promiseFetchData().then((data) => {
            expect(data).toBe('testData')
        })
    })
})
describe('Asynchronous promise test use resolves', () => {
    test('promise test', () => {
        return expect(promiseFetchData()).resolves.toBe('testData')
    })
})