/// <reference types="cypress"/>

describe ('Funcionalidade: login', () =>{
    it('Deve fazer login com sucesso',() => {
        cy.visit ('https://cursos.universidadedodota.com.br/auth/login')
        cy.get('[name="Acesso[email]"]').type('filipecalmeida11@gmail.com')
        cy.get('[name="Acesso[senha]"]').type('Igorfilipe1')
        cy.get('.btn').click()
        cy.get('https://cursos.universidadedodota.com.br/area/vitrine')
       
        
    })
})