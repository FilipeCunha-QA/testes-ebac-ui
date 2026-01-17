/// <reference types="cypress"/>
import produtos from "../fixtures/produtos.json"
describe('Funcionalidade: Busca no catalogo', () => {
    
    beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve fazer a busca do produto com sucesso', () => {
    cy.get('.search >').type('kratos gym pants')
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.product_title').should('contain', 'Kratos Gym Pant')
    
});
it('Deve fazer a busca do produto usando a massa de dados', () => {
    cy.get('.search >').type(produtos[1].Produtos)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.product_title').should('contain', produtos[1].Produtos)
});
it('deve fazer a busca de um produto usando o fixture', () => {
    cy.fixture('produtos').then((prod) => {
    cy.get('.search >').type(prod[1].Produtos)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.product_title').should('contain', prod[1].Produtos)
    })
});
it.only('Deve validar todos os produtos na lista', () => {
  cy.fixture('produtos').then((prod) => {
    prod.forEach((item) => {
      cy.get('.search input[name="s"]').clear().type(item.Produtos)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.search input[name="s"]').clear().type(item.Produtos)
cy.get('.product_title').should('contain', item.Produtos)
    })
  })
})


});