// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

cypress.commands.add('form',(username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.get('.btn').click()
    cy.get('#pay_bills_tab').click()
    cy.get('#sp_payee').select('sprint')
    cy.get('#sp_account').select('Loan')
    cy.get('#sp_amount').type(0)
    cy.get('#sp_date').type('2023 - 05 -23')
    cy.get('.ui-datepicker-current-day > .ui-state-default').click()
    cy.get('#sp_description').type('isi apaan ini')
    cy.wait(500)
    cy.get('#pay_saved_payees').click()

})


