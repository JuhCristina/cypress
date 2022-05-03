/// <reference types="cypress" />

describe("Teste de divisão", () => {

    function dividir(numerador, denominador) {

        var resultadoDivisao = numerador / denominador;

        return resultadoDivisao

    }

    function resto(numerador, denominador) {

        var resto = numerador % denominador;

        return resto
    }

    it("Teste dividir número inteiro", () => {
    
        var divisao = dividir(10,5)
        var resultado = 2

        expect(divisao).to.equal(resultado);

    });

    it("Teste dividir número decimal", () => {
    
        var numerador = 10.6
        var denominador = 2.2
        var divisao = numerador / denominador

        expect(divisao).to.equal(dividir(numerador, denominador));

    });

    it("Teste dividir denominador 0", () => {
    
        var numerador = 10
        var denominador = 0
        var divisao = numerador / denominador

        expect(divisao).to.equal(dividir(numerador, denominador));

    });

    it("Teste dividir numerador 0", () => {
    
        var numerador = 0
        var denominador = 2
        var divisao = numerador / denominador

        expect(divisao).to.equal(dividir(numerador, denominador));

    });

    it("Teste dividir com resto", () => {
    
        var numerador = 10
        var denominador = 7
        var divisao = numerador / denominador
        var resultadoResto = numerador % denominador

        expect(divisao).to.equal(dividir(numerador, denominador));
        expect(resultadoResto).to.equal(resto(numerador, denominador));
    
    });

    it("Teste dividir número decimal com resto", () => {
    
        var numerador = 11.6
        var denominador = 2.2
        var divisao = numerador / denominador
        var resultadoResto = numerador % denominador

        expect(divisao).to.equal(dividir(numerador, denominador));
        expect(resultadoResto).to.equal(resto(numerador, denominador));

    });
       
})