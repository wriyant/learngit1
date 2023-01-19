/// <reference types="cypress" />


describe('showing in web', () => {
 before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
    cy.get('#signin_button').click()
});

   it('shold try to login whit invalid data', () => {
    cy.get('#login_form').should('be.visible')
    cy.get('#user_login').type('invalid username')
    cy.get('#user_password').type('invalid password')
    cy.get('input[name="submit"]').click()
   
});

   it('should login alication with valid data', () => {
   cy.fixture("user").then((user) => {
    const username = user.username
    const password = user.password

   cy.login(username, password)

    });  
  });
});
