/// <reference types="cypress" />



describe('My First Test', () => {
 it('Visits login page', () => {
     cy.visit('https//www.saucedemo.com')

 });
// cypress.commands.overwrite('visit', (originalfn, url,options) => { ... })
     it('should try to login')
    cypress.comands.add('login', (username1, username2, username3, username3, username4, password) => {
    cy.clearcookies()

    cy.get('[data-test="usrname"]').type(username)
    cy.get('[data.test="password]').click()
    cy.wait(500)
    cy.get('.title').should('contain.text', 'products')


    cy.wait(500)
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()

    cy.get('[data-test="username]').type(username2)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('contai.text', 'epic sadface: sorry, this user has been locked out.')
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="username"]').type(username3)
    cy.get('[data-test="password"]').clear()
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain.text', 'products')
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="continue-shopping"]').click
    cy.wait(500)

    });
})
    


