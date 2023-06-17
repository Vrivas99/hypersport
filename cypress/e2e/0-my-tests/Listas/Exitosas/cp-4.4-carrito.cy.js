import "cypress-real-events"
describe('Agregar al carrito', () => {
    it('passes', () => {
        //visito la pagina
        cy.visit('http://localhost:3000/')

        //agrego el primer producto al carrito
        cy.wait(1000)
        cy.get(':nth-child(1) > .mt-4 > .cursor-pointer').click()

        //verifico que se haya agregado 1 producto al carrito
        cy.wait(1000)
        cy.get(':nth-child(1) > .relative > .absolute').should("be.visible")


        //hago click en el carrito
        cy.wait(1000)
        cy.get(':nth-child(1) > .relative').realClick()

        //verifico que renderize el layout del carrito
        cy.wait(1000)
        cy.get('.overflow-y-auto').should("be.visible")

        //verifico que la cantidad del producto sea 1 dentro del layout del carrito
        cy.wait(1000)
        cy.get('.relative > .absolute > div').should("have.text", "1")

        //hago click en el + para aumentar la cantidad
        cy.wait(1000)
        cy.get('.absolute > .bg-green-600').click()

        //verifico que la cantidad del producto sea 2 dentro del layout del carrito
        cy.wait(1000)
        cy.get('.relative > .absolute > div').should("have.text", "2")

    })

})