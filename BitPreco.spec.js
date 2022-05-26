/// <reference types="cypress" />

describe('Teste de login na BitPreco', () => {
    beforeEach(() => {
      cy.visit('https://bitpreco.com/')
    })
    
    it('Validar com o login existente.', () => {
    // Validar se o está site correto
        cy.get('#banner_home').should('be.visible')
        
    
    // Fechar o banner de eventos e aceitar os cookies do site  
        cy.get('.modal-banner-body',{timeout: 5000}).then(() => {
            cy.get('.close > img').click()})
        cy.get('.card-body').then(() => {
            cy.get('.card-body > .btn').click()})
    
    // Visitando a pagina de login
        cy.get('.nav-menu > #nav-buttons > #btn-login').then(() => {
            cy.get('.nav-menu > #nav-buttons > #btn-login').click()})    
    
    // Verificando se os campos de e-mail e senha contém o ASTERISCO
        cy.get('.jss219 > :nth-child(1) > .jss223').should('contain', "E-mail")
        cy.get('.jss219 > :nth-child(1) > .jss223').should('contain', "*")
        cy.get(':nth-child(2) > .jss223').should('contain', "Senha")
        cy.get(':nth-child(2) > .jss223').should('contain', "*")
        
    // Preenchendo os campos e realizando o login
        cy.get('#emailfield').type('*insira uma e-mail válido')
        cy.get(':nth-child(2) > .jss223 > .jss239 > .jss247').type('*Insira uma senha válida')
        cy.get('.jss219 > :nth-child(3) > .jss83 > .jss60').then(() => {
            cy.get('.jss219 > :nth-child(4) > .jss83 > .jss60').click()})
        
    // Validar se realmente está logado
        // Banner de eventos
        cy.contains('Fechar').should('be.visible').then(() => {
            cy.contains('Fechar').click()})
        
        //Validação real de login
        cy.contains('Ivan Mendonca').should('contain.text', 'Ivan Mendonca')

    // Realizando o logout
        // Acessar o menu de opções 
        cy.contains('Ivan Mendonca').click()
        cy.contains('Encerrar sessão').should('contain', 'Encerrar sessão').then(() => {
            cy.contains('Encerrar sessão').click()})

        //Notificação de saída
        cy.contains('Deseja encerrar a sessão?').should('be.visible').then(() => {
            cy.contains('Ok').click()})

    })
    
    it('Validar o login com um email inexistente.', () => {
        // Validar se é o site correto
        cy.get('#banner_home').should('be.visible')
        
        // Fechar o banner de eventos e aceitar os cookies do site  
        cy.get('.modal-banner-body',{timeout: 5000}).then(() => {
            cy.get('.close > img').click()})
        cy.get('.card-body').then(() => {
            cy.get('.card-body > .btn').click()})
        
        // Visitando a pagina de login
        cy.get('.nav-menu > #nav-buttons > #btn-login').then(() => {
            cy.get('.nav-menu > #nav-buttons > #btn-login').click()})    
            
        // Preenchendo os campos e realizando o login
        cy.get('#emailfield').type('ivantest@gmail.com')
        cy.get(':nth-child(2) > .jss223 > .jss239 > .jss247').type('*insira uma senha válida')
        cy.get('.jss219 > :nth-child(3) > .jss83 > .jss60').should('be.visible')
        cy.wait(1000)
        cy.get('.jss219 > :nth-child(4) > .jss83 > .jss60').click()

        // Validar o erro de login  
        cy.get('.jss279 > .jss32').should('be.visible')
        cy.get('#alert-dialog-slide-title > .jss149').contains('Credenciais inválidas')

    })

    it('Validar o login com uma senha incorreta.', () => {
        // Validar se é o site correto
        cy.get('#banner_home').should('be.visible')
        
        // Fechar o banner de eventos e aceitar os cookies do site  
        cy.get('.modal-banner-body',{timeout: 5000}).then(() => {
            cy.get('.close > img').click()})
        cy.get('.card-body').then(() => {
            cy.get('.card-body > .btn').click()})
        
        // Visitando a pagina de login
        cy.get('.nav-menu > #nav-buttons > #btn-login').then(() => {
            cy.get('.nav-menu > #nav-buttons > #btn-login').click()})
            
        // Preenchendo os campos e realizando o login
        cy.get('#emailfield').type('*insira um e-mail válido')
        cy.get(':nth-child(2) > .jss223 > .jss239 > .jss247').type('12$As678')
        cy.get('.jss219 > :nth-child(3) > .jss83 > .jss60').should('be.visible')
        cy.wait(1000)
        cy.get('.jss219 > :nth-child(4) > .jss83 > .jss60').click()

        // Validar o erro de login
        cy.get('.jss279 > .jss32').should('be.visible')
        cy.get('.jss279 > .jss32').contains('Erro de autenticação, por favor, tente novamente.')
    })

    it('Acessando a conta de demonstração.', () => {
        // Validar se é o site correto
        cy.get('#banner_home').should('be.visible')
        
        // Fechar o banner de eventos e aceitar os cookies do site  
        cy.get('.modal-banner-body',{timeout: 10000}).then(() => {
            cy.get('.close > img').click()})
        cy.get('.card-body').then(() => {
            cy.get('.card-body > .btn').click()})
        
        // Visitando a pagina de login
        cy.get('.nav-menu > #nav-buttons > #btn-login').then(() => {
            cy.get('.nav-menu > #nav-buttons > #btn-login').click()})
        
        // Acessando a conta demo
        cy.get('.jss219 > :nth-child(6) > .jss83').should('be.visible').then(() => {
            cy.get('.jss219 > :nth-child(6) > .jss83').click()
        })

        // Fechando o banner de eventos
        cy.contains('Fechar').should('be.visible').then(() => {
            cy.contains('Fechar').click()})

        // Validando o login
        cy.get('.jss830 > :nth-child(1) > :nth-child(1) > .jss380').should('contain.text', 'Demonstração').then(() => {
            cy.get('.jss830 > :nth-child(1) > :nth-child(1) > .jss380 > .jss564').click()
        })

        //Encerrando o login
        cy.contains('Encerrar sessão').should('contain', 'Encerrar sessão').then(() => {
            cy.contains('Encerrar sessão').click()})

        //Notificação de saída
        cy.contains('Deseja encerrar a sessão?').should('be.visible').then(() => {
            cy.contains('Ok').click()})
    })
})