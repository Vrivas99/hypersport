describe('pruebo la barra de busqueda', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')

        //hago click en la barra de busqueda
        cy.wait(1000)
        cy.get('#default-search').click()

        //Escribo zapatilla en la barra de busqueda
        cy.wait(1000)
        cy.get('#default-search').type('zapatillas')

        //me aseguro que renderizen los resultados de la barra de busqueda
        cy.wait(1000)  
        cy.get('.top-48').should('exist')

        //hago click en el primer producto
        cy.wait(1000)
        cy.get('.top-48 > :nth-child(1)').click()
    })
})