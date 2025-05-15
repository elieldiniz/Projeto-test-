test("Deve verificar se um valor e outro valor",()=>{
    expect(10).toBe(10)
})

test("Deve verificar se um valor não e outro valor",()=>{
    expect(10).not.toBe(5)
})

test("Deve verificar se um valor e nulo",()=>{
    expect(null).toBe(null)
    expect(null).toBeNull()
})

test("Deve verificar se um valor não nulo",()=>{
    expect(1).not.toBe(null)
    expect(1).not.toBeNull()
})


test("Deve verificar se um valor esta definido",()=>{
    expect(3).toBeDefined()
    expect(3).not.toBe(undefined)
    expect(3).not.toBeUndefined()
})

test("Deve verificar se um valor está indefinido", () => {
    expect(undefined).toBe(undefined);       // OK
    expect(undefined).toBeUndefined();       // Correto
});


test("Deve verificar se um valor e falso",()=>{
    expect(undefined).toBeFalsy()
    expect(null).toBeFalsy()
    expect("").toBeFalsy()
    expect(NaN).toBeFalsy()
    expect(0).toBeFalsy()
    expect(-0).toBeFalsy()
    
})

test("dev verificar se um valor e truthy ",()=>{
    expect(4).toBeTruthy()
    expect(-13).toBeTruthy()
    expect("oi").toBeTruthy()
})

