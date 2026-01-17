/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Cadastro', () => {
   
   beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
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

it.only('Deve preencher cadastro com sucesso usando comando customizado', () => {
   cy.preencherCadastro(
      faker
   )
   cy.get('.woocommerce-message').should('exist')

});


});