describe('Responsividad del Navbar', () => {
     beforeEach(() => {
        cy.viewport("iphone-se2")
    })

    it('passes', () => {
        cy.visit('http://localhost:3000/')

        //reviso si se ocultaron los botones del navbar
        cy.contains('Home').should('not.be.visible')
        cy.contains('Deportes').should('not.be.visible')
        cy.contains('Otros').should('not.be.visible')
        cy.contains('Ingresar').should('not.be.visible')
        cy.get('.z-40').should('exist')
        cy.contains('Menu').should('be.visible')



    })
})