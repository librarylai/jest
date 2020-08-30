import {
    fetchData
} from '../src/fetchData'
describe('Asynchronous callback test', () => {
    test('callback test', (done) => {
        const callback = (data) => {
            expect(data).toBe('我是資料.........')
        }
        fetchData(callback)
    })
})