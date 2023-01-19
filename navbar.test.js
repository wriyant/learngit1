/// <reference types="cypress" />


describe('navbar text', () => {
    before(() => {
       cy.visit('http://zero.webappsecurity.com/index.html')

});
it('should display online banking containt', () => {
     cy.get('#onlineBankingMenu').click()
     cy.url().should('include', 'online-banking.html')
     cy.get('h1').should('be.visible')
});

it('should display feedback content', () => {
     cy.get('#feedback').click()
     cy.url().should('include', 'feedback.html')
});

  it('should display hompage content', () => {
     cy.get('.brand').click()
     cy.url().should('include', '/index.html')
     cy.get('#signin_button').click()
     cy.get('h3').should('have.text', 'Log in to ZeroBank')
     
});
});