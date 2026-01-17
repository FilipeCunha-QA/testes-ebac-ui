class CadastroPage{

    //Seletores
      campoEmail(){
        return cy.get('[name="email"]')}
      campoSenha(){ return cy.get('.register > :nth-child(2) > [name="password"]')}
      campoRegistro() {return cy.get('[name="register"]')}
      campoCadastro() {return cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')}
      campoMain() {return cy.get('#main')}
      campoNome(){ return cy.get('[name="account_first_name"]')}
      campoSobrenome(){ return cy.get('[name="account_last_name"]')}
      campoSalvar(){return cy.get('[name="save_account_details"]')}



    //Metodos

    visitarPaginaCadastro() {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }

    preencherCadastro (email,senha, nome, sobrenome) {
        this.campoEmail().clear().type(email)
        this.campoSenha().clear().type(senha)
        this.campoRegistro().click()
        this.campoCadastro().click()
        this.campoMain().should('contain', 'Detalhes da conta')
        this.campoNome().clear().type(nome)
        if(sobrenome) this.campoSobrenome().clear().type(sobrenome)
        this.campoSalvar().click()
    }


}

export default new CadastroPage