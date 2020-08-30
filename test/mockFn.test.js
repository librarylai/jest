import {
    calculateShopTotal,
    discountItemList
} from '../src/calculateShop'
let shopData = [{
        name: '衣服',
        count: 3,
        price: 20
    },
    {
        name: '褲子',
        count: 6,
        price: 23
    },
    {
        name: '鞋子',
        count: 2,
        price: 60
    },
]
describe('Mock functions', () => {
    const mockFn = jest.fn()
    mockFn.mockReturnValueOnce(true)
    mockFn.mockReturnValueOnce(false)
    mockFn.mockReturnValue(true)
    test('price total', () => {
        expect(calculateShopTotal(shopData, mockFn)).toBe(282)
    })
    test('mock called length', () => {
        expect(mockFn.mock.calls.length).toBe(3)
    })
    test('mock first arg of first call', () => {
        expect(mockFn.mock.calls.[0][0]).toBe('衣服')
    })
     test('mock result of second call ', () => {
        expect(mockFn.mock.results[1].value).toBe(false)
    })
})