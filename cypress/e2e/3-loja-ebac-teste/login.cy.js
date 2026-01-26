/// <reference types="cypress"/>
import user from "./fixtures/usuario.json"


describe ('Funcionalidade: login', () =>{
   beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
   });

afterEach(() => {
cy.screenshot()
   });
    it('Deve fazer login com sucesso',() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('filipecalmeida11@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('Igorfilipe1.')
        cy.get('[name="login"]').click ()
        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, filipecalmeida11 (não é filipecalmeida11? Sair)')
              
    })

    it('Deve exibir mensagem de erro ao inserir usuario invalido', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('filipe@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('Igorfilipe1')
        cy.get('[name="login"]').click ()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
               
    });

    it('Deve exibir mensagem de erro ao inserir uma senha invalida', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('filipecalmeida11@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('igor1')
        cy.get('[name="login"]').click ()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail filipecalmeida11@gmail.com está incorreta.')
    
    });

    it('Deve fazer login com sucesso - Ulizando comando customizado', () => {
        cy.login('filipecalmeida11@gmail.com', 'Igorfilipe1.')

    });

    it('Deve fazer login usando importação da massa de dados', () => {
        cy.login(user.email, user.password)
    });


})
