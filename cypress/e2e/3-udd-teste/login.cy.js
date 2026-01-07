/// <reference types="cypress"/>

describe ('Funcionalidade: login', () =>{
    it('Deve fazer login com sucesso',() => {
        cy.visit ('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click ()
        
        cy.get('[data-test="title"]').should('contain','Products')
    
       
        it('deve exibir uma mensagem de erro ao inserir o usuario invalido', () => {
            
        cy.visit ('https://www.saucedemo.com/')
        cy.get('[name="Acesso[email]"]').type('filipe@gmail.com')
        cy.get('[name="Acesso[senha]"]').type('secret_sauce')
        cy.get('.btn').click()
        });
        
    })
})