import "cypress-real-events"
describe('Realizar una compra', () => {
    it('passes', () => {
        //visito la pagina
        cy.visit('http://localhost:3000/')

        //agrego el primer producto al carrito
        cy.wait(1500)
        cy.get(':nth-child(1) > .mt-4 > .cursor-pointer').click()

        //verifico que se haya agregado 1 producto al carrito
        cy.wait(1500)
        cy.get(':nth-child(1) > .relative > .absolute').should("be.visible")


        //hago click en el carrito
        cy.wait(1500)
        cy.get(':nth-child(1) > .relative').realClick()

        //verifico que renderize el layout del carrito
        cy.wait(1500)
        cy.get('.overflow-y-auto').should("be.visible")

        //verifico que la cantidad del producto sea 1 dentro del layout del carrito
        cy.wait(1500)
        cy.get('.relative > .absolute > div').should("have.text", "1")

        //hacer click en el boton que dice Ir a pagar
        cy.wait(1500)
        cy.contains('Ir a pagar').click()

        //Abro un origen para trabajar dentro de un callback

        cy.origin('https://webpay3gint.transbank.cl', () => {
            
            //Hago click en el texto que dice Anular compra y volver al comercio
            cy.wait(2000)
            cy.contains('Anular compra y volver al comercio').click()            
        })

        //verifico que se haya vuelto a la url base
        cy.wait(100)
        cy.url().should('eq', 'http://localhost:3000/')

    })
})