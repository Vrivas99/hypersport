describe('Verificar que el grid de los productos cambie responsivamente', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')
        
        //reviso el tamaño del grid sea de 1349*1470
        cy.get('.grid').should('have.css', 'width', '1349px')
        cy.get('.grid').should('have.css', 'height', '1470px')
        
        //cambio la vista a iphone se2
        cy.viewport("iphone-se2")

        //reviso el tamaño del grid sea de 358*1088
        cy.get('.grid').should('have.css', 'width', '358px')
        cy.get('.grid').should('have.css', 'height', '1088px')

    })
})


