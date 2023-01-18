/// <reference types="cypress" />




describe('showing in web', () => {

 before(() => {
    cy.visit('http://zero.webappsecurity.com/')
    
});
it('try to search', () => {
  cy.get('#searchTerm').type('pay bills{enter}')
  cy.get('li > a').click()
});
it('should fill username end password', () => {
  cy.get('#user_login').type('username')
  cy.get('#user_password').type('password')
  cy.get('#user_remember_me').click()
  cy.get('.btn').click()
  cy.get('#pay_bills_tab > a').click()

});
it('should fill add form', () => {
  cy.get('.board-header').should('have.text', 'Make payments to your saved payees')
  cy.get('#sp_payee').select('sprint')
  cy.get('#sp_account').select('Checking').should('have.value', '2')
  cy.get('#sp_amount').type('0{enter}')
  cy.get('#sp_date').type('2023-01-02{enter}')
  cy.get('#sp_description').type('try{enter}')
  
  cy.get('$ 0 payed to payee sprint').should('have.text', 'The payment was successfully submitted.')

});
});