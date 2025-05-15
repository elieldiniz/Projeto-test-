test("deve verivficar se um numero emaio que outro",()=>{
    expect(10).toBeGreaterThan(5)
})

test("deve verivficar se um numero maio ou igual a outro",()=>{
    expect(10).toBeGreaterThanOrEqual(10)
    expect(10).toBeGreaterThanOrEqual(5)
})
test("deve verivficar se um valor e menor que outro",()=>{
    expect(10).toBeLessThan(20)
})

test("deve verivficar se um valor e menor INGUAL A OUTRO outro",()=>{
    expect(10).toBeLessThanOrEqual(20)
    expect(10).toBeLessThanOrEqual(10)
})

test("deve verivficar se um valor e proximo de outro",()=>{
    expect(0.22222222223).toBeCloseTo(0.22, 2)
})