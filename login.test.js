/// <reference types="cypress" />


describe('working whit inputs', () => {

    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', "login.html")

    });

        it('should fill username', () => {
            cy.get('#user_login').clear()
            cy.get('#user_login').type('username')

    }); 

        it('should fill password', () => {
            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type('password')

    });

        it('should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)
            cy.contains('sign_in').click()

            
        })
    });
}); 