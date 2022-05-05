class CadastroPage {
    formularioDeRegistro = ".card__register";
    inputEmail = ".card__register input[name='email']";
    inputNome = ".card__register input[name='name']";
    inputSenha = ".card__register input[name='password']";
    inputConfirmaSenha = ".card__register input[name='passwordConfirmation']";

    visitarSite() {
        cy.visit("https://bugbank.netlify.app");
    }

    cadEmail(email="xu@gemeiu.com") {
        cy.get(this.inputEmail).type(email, { force: true });
    }
    
    cadNome(nome="Xuliana") {
        cy.get(this.inputNome).type(nome, {force: true});
    }
    
    cadSenha(senha=1234) {
        cy.get(this.inputSenha).type(senha, {force: true});
    }
    
    cadConfirmaSenha(confirmaSenha=1234) {
        cy.get(this.inputConfirmaSenha).type(confirmaSenha, {force: true});
    }

    cadastroComSucesso(email="xu@gemeiu.com", nome="Xuliana", senha=1234, confirmaSenha=1234) {
        cy.get(this.inputEmail).type(email, { force: true });
        cy.get(this.inputNome).type(nome, {force: true});
        cy.get(this.inputSenha).type(senha, {force: true});
        cy.get(this.inputConfirmaSenha).type(confirmaSenha, {force: true});
    }

    cadastroParaTesteLogin(email="xu@gemeiu.com", nome="Xuliana", senha=1234, confirmaSenha=1234) {
        cy.contains("button", "Registrar").click();
        cy.get(this.inputEmail).type(email, { force: true });
        cy.get(this.inputNome).type(nome, {force: true});
        cy.get(this.inputSenha).type(senha, {force: true});
        cy.get(this.inputConfirmaSenha).type(confirmaSenha, {force: true});
        cy.contains("button", "Cadastrar").click({force: true});
        cy.get("#btnCloseModal").click({force: true});
    }

    tempo() {
        cy.wait(1000);
    }

    botaoRegistrar () {
        cy.contains("button", "Registrar").click();
    }

    botaoCadastrar () {
        cy.contains("button", "Cadastrar").click({force: true});
    }

    botaoAcessar () {
        cy.contains("button", "Acessar").click({force: true});
    }

    botaoVoltarLogin () {
        cy.contains('Voltar ao login').click({force: true});
    }

    fechaConcluido () {
        cy.get("#btnCloseModal").click({force: true});
    }

    contaComSaldo () {
        cy.get("#toggleAddBalance").click({force: true});
    }

    validacaoSaldo1000 () {
        cy.get("#textBalance span").contains('1.000');
    }

    validacaoSaldo0 () {
        cy.get("#textBalance span").contains('0,00');
    }

    validacaoEmail () {
        cy.get("div.card__register .input__warging").eq(0).should('have.text', 'É campo obrigatório');
    }

    validacaoNome () {
        cy.get("div.card__register .input__warging").eq(1).should('not.have.text', 'É campo obrigatório');
    }

    validacaoSenha () {
        cy.get("div.card__register .input__warging").eq(2).should('have.text', 'É campo obrigatório');
    }

    validacaoConfirmaSenha () {
        cy.get("div.card__register .input__warging").eq(3).should('have.text', 'É campo obrigatório');
    }

    validacaoCardNome () {
        cy.get(".styles__ContainerInformations-sc-8zteav-3").should('be.visible');
    }

    validacaoSenhaDiferentes () {
        cy.contains('As senhas não são iguais.');
    }

    validacaoContaCriada () {
        var regex = /[A conta ][0-9]{1,3}-[0-9]{1}[ foi criada com sucesso]/;
        cy.contains(regex);
    }

    validacaoFormatoInvalido () {
        cy.contains('Formato inválido');
    }

    validacaoTelaInicial () {
        cy.contains("button", "Acessar");
    }

}

export var cadastroPage = new CadastroPage();