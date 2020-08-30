describe('Truthiness matchers test', () => {
    test('null and undefind', () => {
        let str; // undefined
        expect(str).toBeNull(); // failed 
        expect(str).toBeUndefined(); // pass
        expect(null).toBeNull(); // pass
    })
    test('toBeDefined', () => {
        let str = 'iron man'; // Defined , type String
        expect(str).toBeDefined(); // pass 
        expect(str).toBeUndefined(); // failed
    })
    test('toBeTruthy and toBeFalsy', () => {
        let truthy = true;
        let falsy = false;
        expect(truthy).toBeTruthy() // pass
        expect(falsy).toBeFalsy() // pass
    })
})