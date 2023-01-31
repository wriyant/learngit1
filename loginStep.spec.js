import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit to the valid a website', () => {
    Given('I visit to the valid a websiteopen login page', () => {
        cy.visit('http://zero.webappsecurity.com/')
})
When('I get to the Some fitur Form to search ', () => {
   cy.get('input[name="searchTerm"]').type('Pay Bills')
})
Then('I get to the type some text to search', () => {
    cy.get('a').should('be.a', 'Zero - Pay Bills')
    cy.get('a').should('be.a', 'Zero Bank')
})
})