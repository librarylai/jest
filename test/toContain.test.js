test('use toMatch to test email address', () => {
    const arr = ['apple', 'banana', 'cat', 'dog']
    expect(arr).toContain('apple') //pass
    expect(new Set(arr)).toContain('cat') //pass
})