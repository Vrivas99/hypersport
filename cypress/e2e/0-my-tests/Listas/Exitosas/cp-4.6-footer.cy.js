import "cypress-real-events"
describe('Navegacion footer', () => {
    it('passes', () => {
        //visito la pagina
        cy.visit('http://localhost:3000/')

        //hacer click en Futbol
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Futbol').click()

        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/futbol')
        
        //bajo hasta el footer
        cy.wait(1500)
        cy.get('.bg-gray-60').scrollIntoView()

        //hacer click en Tenis
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Tenis').click()
        
        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/tenis')

        //bajo hasta el footer
        cy.wait(1500)
        cy.get('.bg-gray-60').scrollIntoView()

        //hacer click en Basquetbol
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Basquetbol').click()

        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/basquet')

        //bajo hasta el footer
        cy.wait(1500)
        cy.get('.bg-gray-60').scrollIntoView()

        //hacer click en Voleibol
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Voleibol').click()

        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/volei')

        //bajo hasta el footer
        cy.wait(1500)
        cy.get('.bg-gray-60').scrollIntoView()

        //hacer click en Golf
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Golf').click()

        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/golf')

        //bajo hasta el footer
        cy.wait(1500)
        cy.get('.bg-gray-60').scrollIntoView()

        //hacer click en Hockey
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Hockey').click()

        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/hockey')

        //bajo hasta el footer
        cy.wait(1500)
        cy.get('.bg-gray-60').scrollIntoView()

        //hacer click en Ciclismo
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Ciclismo').click()

        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/ciclismo')

        //bajo hasta el footer
        cy.wait(1500)
        cy.get('.bg-gray-60').scrollIntoView()

        //hacer click en Baseball
        cy.wait(1500)
        cy.get('.bg-gray-60').contains('Baseball').click()

        //compruebo que el url sea el correcto
        cy.wait(1500)
        cy.url().should('include', '/pagesCat/baseball')

        

    })

})