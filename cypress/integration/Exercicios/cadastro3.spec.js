/// <reference types="cypress" />

describe("Home teste", () => {

    class Pessoa {
        nome;
        email;
        senha;
        confirmaSenha;
    
        constructor(nome, email, senha, confirmaSenha) {
            this.nome = nome;
            this.email = email;
            this.senha = senha;
            this.confirmaSenha = confirmaSenha;

        }
    }

    function tempo() {
        cy.wait(1000);
    }

    function botaoRegistrar () {
        cy.contains("button", "Registrar").click();
    }

    function botaoCadastrar () {
        cy.contains("button", "Cadastrar").click({force: true});
    }

    function botaoAcessar () {
        cy.contains("button", "Acessar").click({force: true});
    }

    function cadEmail(email="xu@gemeiu.com") {
        var pessoa = new Pessoa("Xuliana", email, 1234, 1234);
        cy.get(".card__register input[name='email']").type(pessoa.email, {force: true});
    }

    function cadNome(nome="Xuliana") {
        var pessoa = new Pessoa(nome, "xu@gemeiu.com", 1234, 1234);
        cy.get(".card__register input[name='name']").type(pessoa.nome, {force: true});
    }

    function cadSenha(senha=1234) {
        var pessoa = new Pessoa("Xuliana", "xu@gemeiu.com", senha, 1234);
        cy.get(".card__register input[name='password']").type(pessoa.senha, {force: true});
    }

    function cadConfirmaSenha(confirmaSenha=1234) {
        var pessoa = new Pessoa("Xuliana", "xu@gemeiu.com", 1234, confirmaSenha);
        cy.get(".card__register input[name='passwordConfirmation']").type(pessoa.confirmaSenha, {force: true});
    }

    function cadastrarConta () {
        
        cadEmail();
        cadNome();
        cadSenha();
        cadConfirmaSenha();
    }

    function login(email="xu@gemeiu.com", senha=1234) {
        var pessoa = new Pessoa("Xuliana", email, senha, senha);

        cy.get(".card__login input[name='email']").type(pessoa.email, {force: true});
        cy.get(".card__login input[name='password']").type(pessoa.senha, {force: true});
    }

    beforeEach(() => {
        //pré-condição
        cy.visit("");
        //ação
        botaoRegistrar();

    });

    it("Verificar se os campos Nome, Email, Senha e Confirmação de senha são de preenchimento obrigatório", () => {
        tempo();
        botaoCadastrar();

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

        cadEmail();
        cadSenha();
        cadConfirmaSenha()
        tempo();
        botaoCadastrar();

        //validação nome
        cy.get(".styles__ContainerInformations-sc-8zteav-3").should('be.visible');

    });

    it("Verificar se a tentativa de cadastro sem preencher o Email aparece a mensagem 'Email não pode ser vazio'", () => {
        
        cadNome();
        cadSenha();
        cadConfirmaSenha();
        tempo();
        botaoCadastrar();

        //validação email
        cy.get("div.card__register .input__warging").eq(0).should('have.text', 'É campo obrigatório');

    });

    it("Verificar se a tentativa de cadastro sem preencher a senha aparece a mensagem 'Senha não pode ser vazio'", () => {
        
        cadEmail();
        cadNome();
        cadConfirmaSenha();
        tempo();
        botaoCadastrar();

         //validação senha
         cy.get("div.card__register .input__warging").eq(2).should('have.text', 'É campo obrigatório');

    });

    it("Verificar se a tentativa de cadastro sem preencher a confirmação de senha aparece a mensagem 'Confirmação de senha não pode ser vazio'", () => {
        
        cadEmail();
        cadNome();
        cadSenha();
        tempo();
        botaoCadastrar();

         //validação confirmação de senha
        cy.get("div.card__register .input__warging").eq(3).should('have.text', 'É campo obrigatório');

    });

    it("Verificar se 'criar conta com saldo' cria conta com saldo de R$ 1.000,00", () => {
        cadastrarConta();
        
        //com saldo
        cy.get("#toggleAddBalance").click({force: true});
        tempo();
        botaoCadastrar();

        //Fecha concluído
        cy.get("#btnCloseModal").click({force: true});
        tempo();

        //login
        login();
        botaoAcessar();

        //validação confirmação de senha
        tempo();
        cy.get("#textBalance span").contains('1.000');

    });

    it("Verificar se 'criar conta sem saldo' cria conta com saldo de R$ 0,00", () => {
        cadastrarConta();
        botaoCadastrar();

        //Fecha concluído
        cy.get("#btnCloseModal").click({force: true});
        tempo();

        //login
        login();
        botaoAcessar();

        //validação confirmação de senha
        tempo();
        cy.get("#textBalance span").contains('0,00');

    });

    it("Verificar se senha e confirmação de senha precisam ser iguais", () => {
        
        cadEmail();
        cadNome();
        cadSenha();
        cadConfirmaSenha(54321);
        tempo();
        botaoCadastrar();

        //validação senha
        cy.contains('As senhas não são iguais.')

    });

    it("Verificar se ao cadastrar conta com sucesso o número da conta é exibido", () => {
        cadastrarConta();
        botaoCadastrar();

        //validação conta criada
        var regex = /[A conta ][0-9]{1,3}-[0-9]{1}[ foi criada com sucesso]/;
        cy.contains(regex);

    });

    it("Verificar se tentativa de cadastro com formato de e-mail inválido mostra mensagem de 'formato inválido'", () => {
        cadEmail("ju");

        //validação
        cy.contains('Formato inválido');

    });

    it("Verificar se novo cadastro aceita nome com caracteres especiais", () => {
        cadEmail();
        cadNome("kkk🤣");
        cadSenha();
        cadConfirmaSenha();

        botaoCadastrar();

        //validação
        var regex = /[A conta ][0-9]{1,3}-[0-9]{1}[ foi criada com sucesso]/;
        cy.contains(regex);
        
    });

    it("Verificar se novo cadastro aceita senha com caracteres especiais", () => {
        cadEmail();
        cadNome();
        cadSenha("teste😜");
        cadConfirmaSenha("teste😜");

        botaoCadastrar();

        var regex = /[A conta ][0-9]{1,3}-[0-9]{1}[ foi criada com sucesso]/;
        cy.contains(regex);

        //Fecha concluído
        cy.get("#btnCloseModal").click({force: true});
        tempo();

        //Validação
        login("xu@gemeiu.com", "teste😜");
        botaoAcessar();

    });

    it("Verificar se botão de 'Voltar ao login' retorna à tela inicial", () => {
        cy.contains('Voltar ao login').click({force: true});

        //Validação
        cy.contains("button", "Acessar");

    });


})