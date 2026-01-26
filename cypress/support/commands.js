// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('[name="username"]').type(email, {log:false})
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(password, {log:false})
    cy.get('[name="login"]').click ()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, filipecalmeida11 (não é filipecalmeida11? Sair)')
})


Cypress.Commands.add('preencherCadastro', (faker) =>{
    cy.get('[name="email"]').type(faker.internet.email())
           cy.get('.register > :nth-child(2) > [name="password"]').type('filipe1234')
           cy.get('[name="register"]').click()
           cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('exist')
           cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
           cy.get('[name="account_first_name"]').type(faker.person.firstName())
           cy.get('[name="account_last_name"]').type(faker.person.lastName())
           cy.get('[name="save_account_details"]').click()
           cy.get('.woocommerce-message').should('exist')
})