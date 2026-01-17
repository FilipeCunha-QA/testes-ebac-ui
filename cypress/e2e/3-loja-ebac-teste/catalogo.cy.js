/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Deve selecionar um produto da lista', () => {
        
        cy.get('.product-block')
        //.first()
        //.last()
        //.eq('2')
        .contains('Apollo Running Short')
        .click()

       cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Apollo Running Short')

    });
});