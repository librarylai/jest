describe('number matches', () => {
    test('toBeGreaterThan and toBeGreaterThanOrEqual', () => {
        const num = 2 + 3
        expect(num).toBeGreaterThan(3) // pass num > 3
        expect(num).toBeGreaterThanOrEqual(5) //pass num >= 5
    })
    test('toBeGreaterThan and toBeGreaterThanOrEqual', () => {
        const num = 2 + 3
        expect(num).toBeLessThan(6) // pass num < 6
        expect(num).toBeLessThanOrEqual(5) //pass num <= 5
    })
})