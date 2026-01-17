/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPage from './support/pages/cadastro-page';

describe('Funcionalidade Cadastro', () => {
   
   beforeEach(() => {
      cadastroPage.visitarPaginaCadastro()
   });

    it('Deve completar o cadastro com sucesso', () => {
       cy.get('[name="email"]').type(faker.internet.email())
       cy.get('.register > :nth-child(2) > [name="password"]').type('filipe1234')
       cy.get('[name="register"]').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('exist')
       cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
       cy.get('[name="account_first_name"]').type(faker.person.firstName())
       cy.get('[name="account_last_name"]').type(faker.person.lastName())
       cy.get('[name="save_account_details"]').click()
       cy.get('.woocommerce-message').should('exist')
    });


     it('Deve completar o cadastro com sucesso - Usando variaveis', () => {
      var email = faker.internet.email()
      var nome = faker.person.firstName()
      var sobrenome = faker.person.lastName()
      
       cy.get('[name="email"]').type(email)
       cy.get('.register > :nth-child(2) > [name="password"]').type('filipe1234')
       cy.get('[name="register"]').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('exist')
       cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
       cy.get('[name="account_first_name"]').type(nome)
       cy.get('[name="account_last_name"]').type(sobrenome)
       cy.get('[name="save_account_details"]').click()
       cy.get('.woocommerce-message').should('exist')
    });

it('Deve preencher cadastro com sucesso usando comando customizado', () => {
  
   cy.preencherCadastro(faker)
   cy.get('.woocommerce-message').should('exist')

});

it('Deve fazer cadastro com sucesso usando Page Objects', () => {
   cadastroPage.preencherCadastro('filipe009@gmail.com', 'filipe123', 'filipe', 'Almeida')
   cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, filipe')
});

it.only('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
   cadastroPage.preencherCadastro('filipe81810013@gmail.com', 'kk1234', 'Igor', '')
   cy.get('.woocommerce-error').should('contain', 'Sobrenome é um campo obrigatório.')



});
});