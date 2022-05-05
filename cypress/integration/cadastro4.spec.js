/// <reference types="cypress" />
import { cadastroPage } from "../support/Page/CadastroPage.po";
import { loginPage } from "../support/Page/LoginPage.po";

describe("Home teste", () => {

    beforeEach(() => {
        cadastroPage.visitarSite();
        cadastroPage.botaoRegistrar();
    });

    it("Verificar se os campos Nome, Email, Senha e Confirmação de senha são de preenchimento obrigatório", () => {
        cadastroPage.tempo();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoEmail ();
        cadastroPage.validacaoNome ();
        cadastroPage.validacaoSenha ();
        cadastroPage.validacaoConfirmaSenha();

    });

    it("Verificar se a tentativa de cadastro sem preencher o Nome aparece a mensagem 'Nome não pode ser vazio'", () => {
        cadastroPage.cadEmail();
        cadastroPage.cadSenha();
        cadastroPage.cadConfirmaSenha()
        cadastroPage.tempo();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoCardNome();

    });

    it("Verificar se a tentativa de cadastro sem preencher o Email aparece a mensagem 'Email não pode ser vazio'", () => {
        cadastroPage.cadNome();
        cadastroPage.cadSenha();
        cadastroPage.cadConfirmaSenha();
        cadastroPage.tempo();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoEmail();

    });

    it("Verificar se a tentativa de cadastro sem preencher a senha aparece a mensagem 'Senha não pode ser vazio'", () => {       
        cadastroPage.cadEmail();
        cadastroPage.cadNome();
        cadastroPage.cadConfirmaSenha();
        cadastroPage.tempo();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoSenha();

    });

    it("Verificar se a tentativa de cadastro sem preencher a confirmação de senha aparece a mensagem 'Confirmação de senha não pode ser vazio'", () => {       
        cadastroPage.cadEmail();
        cadastroPage.cadNome();
        cadastroPage.cadSenha();
        cadastroPage.tempo();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoConfirmaSenha();

    });

    it("Verificar se 'criar conta com saldo' cria conta com saldo de R$ 1.000,00", () => {
        cadastroPage.cadastroComSucesso();
        cadastroPage.contaComSaldo();
        cadastroPage.tempo();
        cadastroPage.botaoCadastrar();
        cadastroPage.fechaConcluido();
        cadastroPage.tempo();
        loginPage.loginComSucesso();
        cadastroPage.tempo();

        cadastroPage.validacaoSaldo1000();

    });

    it("Verificar se 'criar conta sem saldo' cria conta com saldo de R$ 0,00", () => {
        cadastroPage.cadastroComSucesso();
        cadastroPage.botaoCadastrar();
        cadastroPage.fechaConcluido();
        cadastroPage.tempo();
        loginPage.loginComSucesso();
        cadastroPage.tempo();

        cadastroPage.validacaoSaldo0();

    });

    it("Verificar se senha e confirmação de senha precisam ser iguais", () => {        
        cadastroPage.cadEmail();
        cadastroPage.cadNome();
        cadastroPage.cadSenha();
        cadastroPage.cadConfirmaSenha(54321);
        cadastroPage.tempo();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoSenhaDiferentes();

    });

    it("Verificar se ao cadastrar conta com sucesso o número da conta é exibido", () => {
        cadastroPage.cadastroComSucesso();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoContaCriada();

    });

    it("Verificar se tentativa de cadastro com formato de e-mail inválido mostra mensagem de 'formato inválido'", () => {
        cadastroPage.cadEmail("ju");

        cadastroPage.validacaoFormatoInvalido();

    });

    it("Verificar se novo cadastro aceita nome com caracteres especiais", () => {
        cadastroPage.cadEmail();
        cadastroPage.cadNome("kkk🤣");
        cadastroPage.cadSenha();
        cadastroPage.cadConfirmaSenha();
        cadastroPage.botaoCadastrar();

        cadastroPage.validacaoContaCriada();
        
    });

    it("Verificar se novo cadastro aceita senha com caracteres especiais", () => {
        cadastroPage.cadEmail();
        cadastroPage.cadNome();
        cadastroPage.cadSenha("teste😜");
        cadastroPage.cadConfirmaSenha("teste😜");
        cadastroPage.botaoCadastrar();
 
        cadastroPage.validacaoContaCriada();

        cadastroPage.fechaConcluido();
        cadastroPage.tempo();

        loginPage.loginComSucesso("xu@gemeiu.com", "teste😜");

    });

    it("Verificar se botão de 'Voltar ao login' retorna à tela inicial", () => {
        cadastroPage.botaoVoltarLogin();

        cadastroPage.validacaoTelaInicial();
        
    });

})