/// <reference types="cypress" />


describe('My First Test', () => {
  it('visit swag lab website', () => {
  cy.visit('http://saucedemo.com/')

  });

  it('should fill username', () => {
    cy.get('input[name="user-name"]').clear() 
    cy.get('input[name="user-name"]').type('standard_user')

  });
  
  it('should fill password', () => {
    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type('secret_sauce')

  });

  it('should try to login', () => {
    
      cy.get('input[name="login-button"]').click()
      cy.get('.title').should('contain.text', 'Products')
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.wait(5000)
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.wait(5000)

   });   

   it('should try to logout', () => {

      cy.get('.bm-burger-button').click()
      cy.wait(5000)
      cy.get('#logout_sidebar_link').click()
      cy.wait(5000)
      cy.get('.login_logo')
      

    });
  })


  

 