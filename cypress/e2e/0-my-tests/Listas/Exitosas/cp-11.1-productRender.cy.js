describe('Ver si renderizan los productos en menos de 5 segundos', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')

        //reviso si el .grid es visible sin tiempo de espera
        cy.wait(5000)
        cy.get('.grid').should('be.visible',{timeout:0})
    })
})