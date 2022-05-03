/// <reference types="cypress" />

describe("Home teste", () => {

    it("Verificar se o link Home está presente", () => {
    
        //cy.viewport("macbook-16")
        cy.visit("https://www.demoblaze.com/");
        cy.get("a.nav-link[href='index.html']");

    });

    it("Verificar se o link About us está presente", () => {
    
        cy.visit("https://www.demoblaze.com/");
        cy.get("a[data-target='#videoModal']");

    });

    it("Verificar se o link Contact está presente", () => {
    
        cy.visit("https://www.demoblaze.com/");
        cy.get("a[data-target='#exampleModal']");

    });

    it("Verificar se a categoria Phone está presente", () => {
    
        cy.visit("https://www.demoblaze.com/");
        cy.get(`[onclick="byCat('phone')"]`);

    });

    it("Verificar se é possível fechar a tela About us pelo close", () => {
    
        cy.visit("https://www.demoblaze.com/");
        cy.get("a[data-target='#videoModal']").click();
        cy.wait(2000);
        cy.get("#videoModal .modal-footer .btn").click();

    });

    it("Verificar se é possível fechar a tela About us pelo x", () => {
    
        cy.visit("https://www.demoblaze.com/");
        cy.get("a[data-target='#videoModal']").click();
        cy.wait(2000);
        cy.get("#videoModal .modal-header .close").click();

    });

})

