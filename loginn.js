   /// <reference types="cypress" />


   
describe('Tugas command', () => {
  it('visit the web page', () => {
    cy.wait(500)
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.login('username', 'password')
    cy.get('alert_content').should('contains', 'The payment was successfully submitted.')
   
  });
  });
    
 
   

