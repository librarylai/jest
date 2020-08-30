test('two plus two is four', () => {
    expect(2 + 2).not.toBe(5); //pass 2+2 != 5 
    expect(2 + 2).not.toBe('') //pass 用來判斷是否不為空
});