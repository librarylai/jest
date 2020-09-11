describe('toContainEqual test', () => {
    let memberInfo = [{
            name: 'library',
            age: 25
        },
        {
            name: 'Wang',
            age: 23
        },
        {
            name: 'Chen',
            age: 21
        },
    ]
    test('check item in array', () => {
        const myInfo = {
            name: 'library',
            age: 25
        };
        expect(memberInfo).toContainEqual(myInfo);
    });
});