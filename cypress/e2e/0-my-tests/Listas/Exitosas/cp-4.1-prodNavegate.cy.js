describe('ver la pagina de 2 productos', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')

        //pongo el boton sobre el articulo 1
        cy.wait(1000)
        cy.get('.grid > :nth-child(1)').click()

        //vuelvo a la pagina anterior
        cy.wait(1000)
        cy.go('back')

        //pongo el boton sobre el articulo 2
        cy.wait(1000)
        cy.get('.grid > :nth-child(2)').click()

    })
})