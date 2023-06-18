describe('Home Page', () => {
    it('should redirect to user page', () => {
        cy.visit('http://localhost:3000/');
         // Assert that the current URL has been redirected to /user
        cy.url().should('include', '/users');
    })
});