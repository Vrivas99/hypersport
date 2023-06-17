import 'cypress-real-events'
describe('Agregar al carrito', () => {
    it('passes', () => {
        //visito la pagina
        cy.visit('http://localhost:3000/')

        //hago click en el carrito
        cy.wait(1000)
        cy.get(':nth-child(1) > .relative').realClick()

        //verifico que renderize el layout del carrito
        cy.wait(1000)
        cy.get('.overflow-y-auto').should("be.visible")

        //verifico que se haya eliminado el producto del carrito
        cy.wait(1000)
        cy.contains('Carrito vacio').should("be.visible")

    })

})