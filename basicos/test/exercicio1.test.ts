import { Utils } from "../src/Utils";

describe("Max",()=>{

    const numeros: number[] = [5, 10, 15, 20, 25];
    it("Deve retonar null se receber um array vazio",()=>{
        expect(Utils.max([])).toBeNull()
    })

    it("Deve retonar o maior numero do array ",()=>{
        expect(Utils.max(numeros)).toBe(25)
    })
   
})

describe("Min",()=>{

    const numeros: number[] = [5, 10, 15, 20, 25];
    it("Deve retonar null se receber um array vazio",()=>{
        expect(Utils.min([])).toBeNull()
    })

    it("Deve retonar o menor numero do array ",()=>{
        expect(Utils.min(numeros)).toBe(5)
    })
   
})


describe("SomaArray",()=>{

    it("Deve retonar 0 se array vazio",()=>{
        expect(Utils.somaArray([])).toBe(0)
    })

    it("Deve somar numeros diferentes ",()=>{
        const numeros: number[] = [10, -5, 3.5, 20, -2.75, 7.25, -10, 15.6];
        expect(Utils.somaArray(numeros)).toBeCloseTo(38.6,2)
    })
   
})

describe("LimitarNumero",()=>{
    const min = 0
    const max =10
    it("Deve retonaro numero, se o numero estiver debtro do intervalo",()=>{
        const n = 5
        expect(Utils.limitarNumero(n,min,max)).toBe(5)
    })

    it("Deve retornar o valor minimo se o numero estiver abaixo dele  ",()=>{
        const n = -10
        expect(Utils.limitarNumero(n,min,max)).toBe(min)
    })

    it("deve retornar o valor maximo se o numero for maio que e ele",()=>{
        const n = 8000
        expect(Utils.limitarNumero(n,min,max)).toBe(max)
    })

    it("Deve retornar o valor minimo decimal se o numero estiver abaixo dele  ",()=>{
        const min = -9.5
        const n = -10
        expect(Utils.limitarNumero(n,min,max)).toBe(min)
    })

    it("deve retornar o valor maximo decimal se o numero for maio que e ele",()=>{
        const max = 10.9999
        const n = 11
        expect(Utils.limitarNumero(n,min,max)).toBe(max)
    })

    
   
})