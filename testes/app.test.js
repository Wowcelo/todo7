//calculando operações matemáticas
const Service_calculadora = require("../Service/Service_calculadora.js")

test("Qual o valor da operação de subtrair", ()=>{
    expect(Service_calculadora.subtrair(51,32)).toBe(19)
})

test("Qual o valor da  operação de multiplicar", ()=>{
    expect(Service_calculadora.multiplicar(19,12)).toBe(228)
})

test("Qual o valor da operação de dividir", ()=>{
    expect(Service_calculadora.dividir(50,2)).toBe(25)
})

test("Qual o valor da operação de soma", ()=>{
    expect(Service_calculadora.somar(30,15)).toBe(45)
})

test("Qual o valor da operação desubtrair", ()=>{
    expect(Service_calculadora.subtrair(99,98)).toBe(1)
})

test("Qual o valor da operação de multiplicar", ()=>{
    expect(Service_calculadora.multiplicar(5,5)).toBe(25)
})

test("Qual o valor da operação de dividir", ()=>{
    expect(Service_calculadora.dividir(20,2)).toBe(10)
})

test("Qual o valor da operação de dividir", ()=>{
    expect(Service_calculadora.dividir(10,2)).toBe(5)
})

test("Qual o valor da operação de soma", ()=>{
    expect(Service_calculadora.somar(13,41)).toBe(54)
})



