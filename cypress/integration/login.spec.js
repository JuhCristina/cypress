/// <reference types="cypress" />
import { cadastroPage } from "../support/Page/CadastroPage.po";
import { loginPage } from "../support/Page/LoginPage.po";

describe("Home teste", () => {
    var dadosUsuario;

    beforeEach(() => {
        cadastroPage.visitarSite();
        cy.fixture("usuario.json").then( (informacoesUsuario) => {
            dadosUsuario = informacoesUsuario;
            window.localStorage.setItem(informacoesUsuario.email, JSON.stringify(informacoesUsuario));
        })
        //cadastroPage.cadastroParaTesteLogin();

    });

    it("Verificar se tentativa de login acessa conta corretamente", () => {
        loginPage.loginComSucesso(dadosUsuario.email, dadosUsuario.passoword);
        
        loginPage.validacaoAcessoConta();
        
    });

    it("Verificar se tentativa de login sem preencher email aparece a mensagem de 'É campo obrigatório'", () => {
        loginPage.loginSenha();
        cadastroPage.botaoAcessar();
        
        loginPage.validacaoCampoObrigatorio();

    });

    it("Verificar se tentativa de login sem preencher senha aparece a mensagem de 'É campo obrigatório'", () => {
        loginPage.loginEmail();
        cadastroPage.botaoAcessar();
        
        loginPage.validacaoCampoObrigatorio();

    });

    it("Verificar se tentativa de acesso sem preencher campos obrigatórios deve exibir a mensagem 'Usuário e senha precisam ser preenchidos'", () => {
        loginPage.botaoAcessar();
        
        loginPage.validacaoCampoObrigatorio();

    });

    it("Verificar se tentativa de acesso não autoriza o acesso para usuários inválidos", () => {
        loginPage.loginComSucesso("xuh😜", 1234);
        
        loginPage.validacaoFormatoInvalido();

    });

    it("Verificar se tentativa de acesso não autoriza o acesso para usuários não cadastrados", () => {
        loginPage.loginComSucesso("maria@g.com", 123);
        
        loginPage.validacaoUsuarioInvalido();

    });

    it("Verificar se botão de visualizar senha funciona corretamente", () => {
        loginPage.loginEmail();
        loginPage.loginSenha(1234);
        loginPage.visualizaSenha();

        loginPage.validaVisualizacao(1234);

    });

})