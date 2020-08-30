test('toEqual object', () => {
    const obj = {
        name: 'Wang'
    }
    obj.age = 20
    expect(obj).toEqual({
        name: 'Wang',
        age: 20
    })
    expect(obj.name).toBe('Wang')
})