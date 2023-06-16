describe('Canvas Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/canvas');
    });

    it('should render the canvas', () => {
        cy.get('#canvas').should('exist');
    });

    it('should render header', () => {
        cy.get('[id="header"]').should('exist');
    })

    it('should render sidemenu', () => {
        cy.get('[id="sidemenu"]').should('exist');
    })/* 
    it('should handle mouse events', () => {
        cy.get('#canvas')
            .wait(1000)
            .trigger('mousedown', { clientX: 300, clientY: 150 })
            .wait(500)
            .trigger('mousemove', { clientX: 900,  clientY: 150 })
            .trigger('mouseup');
    }); */
});
