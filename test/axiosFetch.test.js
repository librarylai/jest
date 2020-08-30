import {
    fetchAPI
} from '../src/axiosFetch'
import axios from 'axios';
// 模擬整個 axios 模組
jest.mock('axios')
describe('mock modules test', () => {
    test('axios test', () => {
        let result = 'mockAxiosData'
        axios.get.mockResolvedValue(result)
        // mockResolvedValue 相等於 axios.get.mockImplementation(() => Promise.resolve(resp))
        return expect(fetchAPI()).resolves.toBe('mockAxiosData')
    })
})