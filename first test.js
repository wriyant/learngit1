/// <reference types="cypress" />



  describe('My First Test', () => {
    it('visit the link "website"', () => {
      cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')

    });
  
      it('should fill password', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

      it('should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });
      
      it('clicks to tape "keep me signed in"', () => {
        cy.contains('sign').click()
                
    });
  })

       


     
       
    


  