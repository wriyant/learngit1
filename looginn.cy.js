/// <reference types="cypress" />


it('Add a new user', () => {
    cy.request('POST', 'https:reqres.in/api/users/login', Cypress.env).then((response) => {
        cy.loginViaAPI()
        expect(response.status).equal(201)

   })
 })
    
        
