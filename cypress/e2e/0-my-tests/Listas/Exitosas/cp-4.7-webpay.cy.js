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
            
            //elijo el medio de pago Debito
            cy.wait(2000)
            cy.contains('Débito').click() 

            //hago click en Selecciona tu banco
            cy.wait(2000)
            cy.contains('Selecciona tu banco').click()

            //hago click en TEST COMMERCE BANK
            cy.wait(2000)
            cy.contains('TEST COMMERCE BANK').click()

            //escribo el numero de la tarjeta
            cy.wait(2000)
            cy.get('#pan').type('4051885600446623')

            //hago click en pagar
            cy.wait(2000)
            cy.contains('Pagar').click()

            //ingreso el rut y la clave
            cy.wait(3000)
            cy.get('#rutClient').type('11.111.111-1')
            cy.get('#passwordClient').type('123')
            
            //hago click en Aceptar
            cy.contains('Aceptar').click()

            //hago click en Continuar
            cy.wait(1000)
            cy.contains('Continuar').click()
        })
        
        //hago click en Ir a inicio
        cy.wait(1000)
        cy.contains('Ir a inicio').click()




    })
})