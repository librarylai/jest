import {
    getObjectPropertyValueByKey
} from '../src/getObjectPropertyValueByKey'
describe('getObjectPropertyValueByKey test', () => {
    let testObj = {
        languages: [{
                name: '大家好',
                lang: 'tw'
            },
            {
                name: 'Hellow everyone',
                lang: 'en'
            },
        ],
        contract: {
            contractId: '9987123',
            contractInfo: {
                languages: [{
                        name: '這是一份超級龐大合約',
                        lang: 'tw'
                    },
                    {
                        name: 'this is a big contract',
                        lang: 'en'
                    }
                ]
            }
        }
    }
    // 取得物件中某一個值
    test('test get one value', () => {
        return expect(getObjectPropertyValueByKey(testObj, ['languages', '0', 'name'])).toBe('大家好')
    })
    //取得物件中某一陣列內的所有值,會 return 字串
    test('test get list value', () => {
        return expect(getObjectPropertyValueByKey(testObj, ['languages', 'name'])).toBe('大家好 , Hellow everyone')
    })
    // 當輸入為 null undefinede 空時,直接return傳入值
    test('test first argument is null or undefined', () => {
        return expect(getObjectPropertyValueByKey(null, ['languages', 'name'])).toBeFalsy()
    })
})