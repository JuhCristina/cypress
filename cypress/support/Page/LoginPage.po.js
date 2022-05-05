class LoginPage {
    inputLoginEmail = ".card__login input[name='email']";
    inputLoginSenha = ".card__login input[name='password']";

    loginEmail(email="xu@gemeiu.com") {
        cy.get(this.inputLoginEmail).type(email, { force: true });
    }

    loginSenha(senha=1234) {
        cy.get(this.inputLoginSenha).type(senha, {force: true});
    }
    
    
    loginComSucesso(email="xu@gemeiu.com", senha=1234) {
        cy.get(this.inputLoginEmail).type(email, { force: true });
        cy.get(this.inputLoginSenha).type(senha, {force: true});
        cy.contains("button", "Acessar").click({force: true});
    }

    botaoAcessar () {
        cy.contains("button", "Acessar").click();
    }

    visualizaSenha () {
        cy.get(".card__login .login__eye").click();
    }

    validaVisualizacao (senha) {
        cy.get(".card__login input[name='password']").should('have.value', senha);
    }

    validacaoAcessoConta () {
        cy.contains('Saldo em conta');
    }

    validacaoCampoObrigatorio () {
        cy.contains('É campo obrigatório');
    }

    validacaoFormatoInvalido () {
        cy.contains('Formato inválido');
    }

    validacaoUsuarioInvalido () {
        cy.contains('Usuário ou senha inválido');
    }

}

export var loginPage = new LoginPage();