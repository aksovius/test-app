describe('Images Page', () => {
  beforeEach(() => {
    // Before each test, visit the images page
    cy.visit('http://localhost:3000/images');
  });
  it('should render header and side menu', () => {
    cy.get('[id="header"]').should('exist');

    cy.get('[id="sidemenu"]').should('exist');

    // This test checks if the "Loading..." text is displayed.
    cy.get('[id="loader"]').should('have.text', 'Loading...');
  })

  it('should load more images when scroll to bottom', () => {
    // This test checks if more images are loaded when the page is scrolled to the bottom.
    cy.get('[data-cy="image-frame"]').should('have.length', 25);
    // Wait for the images resizing to finish
    cy.wait(500)
    // Scroll to the bottom of the page
    cy.get('[id="loader"]').scrollIntoView()

    // Wait for the images to load
    cy.wait(1000);
    cy.get('[data-cy="image-frame"]').then($els => {
      console.log($els.length);
    });
    // Check if the number of images has increased
    cy.get('[data-cy="image-frame"]').its('length').should('be.gt', 25);
    // Wait for the images resizing to finish
    cy.wait(500)
    // Scroll to the bottom of the page
    cy.get('[id="loader"]').scrollIntoView()
    // Wait for the images to load
    cy.wait(1000);
    cy.get('[data-cy="image-frame"]').then($els => {
      console.log($els.length);
    });
    // Check if the number of images has increased
    cy.get('[data-cy="image-frame"]').its('length').should('be.gt', 50);
  });
});
