/// <reference types="cypress" />

describe("Home teste", () => {

    it("Verificar se os campos Nome, Email, Senha e Confirmação de senha são de preenchimento obrigatório", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        cy.wait(2000);
        cy.get("div.card__register button.button__child").click({force: true});

        //validação e-mail
        cy.get("div.card__register .input__warging").eq(0).should('have.text', 'É campo obrigatório');
        //validação nome
        cy.get("div.card__register .input__warging").eq(1).should('not.have.text', 'É campo obrigatório');
        //validação senha
        cy.get("div.card__register .input__warging").eq(2).should('have.text', 'É campo obrigatório');
        //validação confirmação de senha
        cy.get("div.card__register .input__warging").eq(3).should('have.text', 'É campo obrigatório');

    });

    it("Verificar se a tentativa de cadastro sem preencher o Nome aparece a mensagem 'Nome não pode ser vazio'", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //email
        cy.get("div.card__register .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        //senha
        cy.get("div.card__register .input__default").eq(2).click({force: true}).type("1234");
        //confirmação de senha
        cy.get("div.card__register .input__default").eq(3).click({force: true}).type("1234");
        cy.wait(2000);
        cy.get("div.card__register button.button__child").click({force: true});

        //validação nome
        cy.get(".styles__ContainerInformations-sc-8zteav-3").should('be.visible');

    });

    it("Verificar se a tentativa de cadastro sem preencher o Email aparece a mensagem 'Email não pode ser vazio'", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //nome
        cy.get("div.card__register .input__default").eq(1).click({force: true}).type("Xuliana");
        //senha
        cy.get("div.card__register .input__default").eq(2).click({force: true}).type("1234");
        //confirmação de senha
        cy.get("div.card__register .input__default").eq(3).click({force: true}).type("1234");
        cy.wait(2000);
        cy.get("div.card__register button.button__child").click({force: true});

        //validação email
        cy.get("div.card__register .input__warging").eq(0).should('have.text', 'É campo obrigatório');

    });

    it("Verificar se a tentativa de cadastro sem preencher a senha aparece a mensagem 'Senha não pode ser vazio'", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //email
        cy.get("div.card__register .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        //nome
        cy.get("div.card__register .input__default").eq(1).click({force: true}).type("Xuliana");
        //confirmação de senha
        cy.get("div.card__register .input__default").eq(3).click({force: true}).type("1234");
        cy.wait(2000);
        cy.get("div.card__register button.button__child").click({force: true});

         //validação senha
         cy.get("div.card__register .input__warging").eq(2).should('have.text', 'É campo obrigatório');

    });

    it("Verificar se a tentativa de cadastro sem preencher a confirmação de senha aparece a mensagem 'Confirmação de senha não pode ser vazio'", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //email
        cy.get("div.card__register .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        //nome
        cy.get("div.card__register .input__default").eq(1).click({force: true}).type("Xuliana");
        //senha
        cy.get("div.card__register .input__default").eq(2).click({force: true}).type("1234");
        cy.wait(2000);
        cy.get("div.card__register button.button__child").click({force: true});

         //validação confirmação de senha
        cy.get("div.card__register .input__warging").eq(3).should('have.text', 'É campo obrigatório');

    });

    it("Verificar se 'criar conta com saldo' cria conta com saldo de R$ 1000,00", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //email
        cy.get("div.card__register .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        //nome
        cy.get("div.card__register .input__default").eq(1).click({force: true}).type("Xuliana");
        //senha
        cy.get("div.card__register .input__default").eq(2).click({force: true}).type("1234");
        //confirmação de senha
        cy.get("div.card__register .input__default").eq(3).click({force: true}).type("1234");
        //com saldo
        cy.get("#toggleAddBalance").click({force: true});
        cy.wait(1000);
        cy.get("div.card__register button.button__child").click({force: true});
        //Fecha concluído
        cy.get("#btnCloseModal").click({force: true});
        cy.wait(1000);
        //login
        cy.get("div.card__login .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        cy.get("div.login__password .input__default").eq(0).click({force: true}).type("1234");
        cy.get("div.login__buttons .style__ContainerButton-sc-1wsixal-0.otUnI.button__child").click({force: true});

        //validação confirmação de senha
        cy.wait(1000);
        cy.get("#textBalance span").contains('1.000');

    });

    it("Verificar se 'criar conta sem saldo' cria conta com saldo de R$ 0,00", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //email
        cy.get("div.card__register .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        //nome
        cy.get("div.card__register .input__default").eq(1).click({force: true}).type("Xuliana");
        //senha
        cy.get("div.card__register .input__default").eq(2).click({force: true}).type("1234");
        //confirmação de senha
        cy.get("div.card__register .input__default").eq(3).click({force: true}).type("1234");
        cy.get("div.card__register button.button__child").click({force: true});
        //Fecha concluído
        cy.get("#btnCloseModal").click({force: true});
        cy.wait(1000);
        //login
        cy.get("div.card__login .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        cy.get("div.login__password .input__default").eq(0).click({force: true}).type("1234");
        cy.get("div.login__buttons .style__ContainerButton-sc-1wsixal-0.otUnI.button__child").click({force: true});

        //validação confirmação de senha
        cy.wait(1000);
        cy.get("#textBalance span").contains('0,00');

    });

    it("Verificar se senha e confirmação de senha precisam ser iguais", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //email
        cy.get("div.card__register .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        //nome
        cy.get("div.card__register .input__default").eq(1).click({force: true}).type("Xuliana");
        //senha
        cy.get("div.card__register .input__default").eq(2).click({force: true}).type("12345");
        //confirmação de senha
        cy.get("div.card__register .input__default").eq(3).click({force: true}).type("4321");
        cy.wait(2000);
        cy.get("div.card__register button.button__child").click({force: true});

        //validação senha
        cy.get("#modalText").should('have.text', 'As senhas não são iguais.\n');

    });

    it("Verificar se ao cadastrar conta com sucesso o número da conta é exibido", () => {
        //pré-condição
        cy.visit("https://bugbank.netlify.app/");

        //ação
        cy.get("div.login__buttons button.ihdmxA").click();
        //email
        cy.get("div.card__register .input__default").eq(0).click({force: true}).type("ju@gemeiu.com");
        //nome
        cy.get("div.card__register .input__default").eq(1).click({force: true}).type("Xuliana");
        //senha
        cy.get("div.card__register .input__default").eq(2).click({force: true}).type("1234");
        //confirmação de senha
        cy.get("div.card__register .input__default").eq(3).click({force: true}).type("1234");
        cy.get("div.card__register button.button__child").click({force: true});

        //validação conta criada
        cy.get("#modalText").contains('criada com sucesso');

    });


})