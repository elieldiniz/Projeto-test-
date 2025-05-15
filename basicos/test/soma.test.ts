import { soma } from "../src/soma";

test("Deve testar a função soma", ()=>{
    const resultado = soma(1,2)
    expect(resultado).toBe(3)
})

test("deve fazer soma com numeros positivos",()=>{
    expect(soma(2,3)).toBe(5)
})

test("deve fazer soma com numeros negativos",()=>{
    expect(soma(-2,-3)).toBe(-5)
})

it("dev testar soma com it,",()=>{
    expect(soma(1,2)).toBe(3)
})