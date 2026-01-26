/// <reference types="cypress"/>
import produtos from "../3-loja-ebac-teste/fixtures/produtos.json"
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
    cy.fixture('produtos').then((prod) => {
  expect(prod).to.be.an('array')
  expect(prod[1]).to.have.property('Produtos')

  cy.get('.search input[name="s"]')
    .clear()
    .type(prod[1].Produtos)
})
});
it('deve fazer a busca de um produto usando o fixture', () => {
    cy.fixture('produtos').then((prod) => {
    cy.get('.search >').type(prod[1].Produtos)
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.product_title').should('contain', prod[1].Produtos)
    })
});


it('Deve validar todos os produtos da lista', () => {
  cy.fixture('produtos').then((produtos) => {

    cy.wrap(produtos).each((item) => {

      cy.get('input[name="s"]:visible')
        .first()
        .should('be.enabled')
        .clear()
        .type(item.Produtos)

      cy.get('button[type="submit"]:visible')
        .first()
        .click()

      cy.get('.product_title')
        .should('be.visible')
        .and('contain.text', item.Produtos)
    })
  })
})



});