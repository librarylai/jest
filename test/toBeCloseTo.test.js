test('toBeCloseTo test float', () => {
    let floatNumber = 0.1 + 0.2
    expect(floatNumber).toBe(0.3) //failed
    expect(floatNumber).toBeCloseTo(0.3) //pass
})