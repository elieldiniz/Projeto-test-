import { Utils } from "../src/Utils"

describe("Test da função removerDuplicado", ()=>{

    it("Deve remover duplicados de um array numerico",()=>{
        const arr = [0,1,6.99, -965, 0,1,15,6.99, -80]
        expect(Utils.removerDuplicados(arr)).toEqual( [0,1,6.99,-965,15,-80])
    
    })

    it("Deve remover duplicados de um array strings",()=>{
        const arr = ["a","b","c","d"]
        expect(Utils.removerDuplicados(arr)).toEqual( ["a","b","c",])
    
    })
    it("Deve remover duplicados de um array boleanos",()=>{
        const arr = [true,false,true,false,true,false,true,false]
        expect(Utils.removerDuplicados(arr)).toEqual( [true,false])
    
    })

    
    it("Deve retonar um array vazio se receber um array vazio",()=>{

        expect(Utils.removerDuplicados([])).toEqual([])
    
    })
})

describe("Teste da função  capitalizarString",()=>{
   it("Deve capitalizar uma string em lower case",()=>{
    const s = "bom dia"
    expect(Utils.capitalizarString(s)).toBe("Bom Dia")
   }) 
})