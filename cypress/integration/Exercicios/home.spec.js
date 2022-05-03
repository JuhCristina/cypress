/// <reference types="cypress" />

describe("Home teste", () => {

    it("Acessar página por um Iphone 6", () => {
        //tamanho da página
        //cy.viewport(375, 667)
        cy.viewport("iphone-6")
        //acessar página e path
        cy.visit("https://rarolabs.com.br/");
        cy.visit("/sobre")

    });

})