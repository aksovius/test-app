describe('User Page', () => {

    beforeEach(() => {
        // Before each test, visit the images page
        cy.visit('http://localhost:3000/users');
      });

    it('should render header and side menu', () => {
    cy.get('[id="header"]').should('exist');

    cy.get('[id="sidemenu"]').should('exist');

    // This test checks if the "Loading..." text is displayed.
    cy.get('[id="loader"]').should('have.text', 'Loading...');
    })

    it('should not render side menu, shoud render side menu button on with lower that 768px', () => {
        cy.viewport(768, 800); // Set the viewport resolution to 768x800 pixels
        cy.get('[id="sidemenu"]').should('not.exist');
        cy.get('[id="side-menu-button"]').should('exist')
    })

    it('should render side menu on click side menu button', () => {
        cy.viewport(768, 800); // Set the viewport resolution to 768x800 pixels
        cy.wait(500)
        cy.get('[id="side-menu-button"]').click()
        cy.get('[id="sidemenu"]').should('exist');
    })

    it('click cancel button', () => {
        // Click the "Add User" button
        cy.get('[id="add-user"]').click();
        // Verify that the modal is open with input fields
        cy.get('[id="add-user-modal"]').should('be.visible');
        // Click the "Add User" button in the modal
        cy.get('button[type="reset"]').click();
        // Verify that the modal is closed
        cy.get('[id="add-user-modal"]').should('not.exist');
    })

    it('click close button', () => {
        // Click the "Add User" button
        cy.get('[id="add-user"]').click();
        // Verify that the modal is open with input fields
        cy.get('[id="add-user-modal"]').should('be.visible');
        // Click the "Add User" button in the modal
        cy.get('[id="close-modal"]').click();
        // Verify that the modal is closed
        cy.get('[id="add-user-modal"]').should('not.exist');
    })

    it('adds a new user and verifies the user list', () => {
      // Click the "Add User" button
      cy.get('[id="add-user"]').click();
  
      // Verify that the modal is open with input fields
      cy.get('[id="add-user-modal"]').should('be.visible');
      cy.get('input[name="name"]').type('Sarah Connor Test');
      cy.get('select[id="gender"]').select('Female');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('input[name="postalcode"]').type('12345');
  
      // Click the "Add User" button in the modal
      cy.get('button[type="submit"]').click();
  
      // Verify that the modal is closed
      cy.get('[id="add-user-modal"]').should('not.exist');
  
      // Verify that the new user is added to the list
      cy.get('td').contains('Sarah Connor Test');
    });

    it('should load more user data when scroll to bottom', () => {
        cy.get('table tbody tr').should('have.length', 20);
        cy.get('[id="loader"]').scrollIntoView()
        cy.wait(1000);
        cy.get('table tbody tr').should('be.gt', 20);
    })
  });
  