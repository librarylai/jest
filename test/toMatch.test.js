test('use toMatch to test email address', () => {
    const str = 'testJest@gmail.com'
    const emailRegux = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    expect(str).toMatch(emailRegux)
})