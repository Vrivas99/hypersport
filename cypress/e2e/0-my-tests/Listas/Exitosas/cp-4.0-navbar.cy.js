import "cypress-real-events";

describe('Navegar entre las categorias del navbar', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()

        //hago click en el boton de futbol
        cy.wait(1800)
        cy.contains('Futbol').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/futbol')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()

        //hago click en el boton de tenis
        cy.wait(1800)
        cy.contains('Tenis').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/tenis')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()

        //hago click en el boton de basquetbol
        cy.wait(1800)
        cy.contains('Basquetbol').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/basquet')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()

        //hago click en el boton de voleibol
        cy.wait(1800)
        cy.contains('Voleibol').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/volei')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()

        //hago click en el boton de golf
        cy.wait(1800)
        cy.contains('Golf').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/golf')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()

        //hago click en el boton de hockey
        cy.wait(1800)
        cy.contains('Hockey').realClick()

        //compruebo que la url es la correcta
        cy.url().should('include', '/hockey')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()

        //hago click en el boton de cilcisimo
        cy.wait(1800)
        cy.contains('Ciclismo').realClick()
 
        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/ciclismo')

        //pongo el raton sobre el boton de deportes para que se abra el menu
        cy.wait(1800)
        cy.contains('Deportes').realHover()
        
        //hago click en el boton de baseball
        cy.wait(1800)
        cy.contains('Baseball').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/baseball')

        //pongo el raton sobre el boton de otros para que se abra el menu
        cy.wait(1800)
        cy.contains('Otros').realHover()

        //hago click en el boton de ofertas
        cy.wait(1800)
        cy.contains('Ofertas').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('include', '/ofertas')

        //hago click en el boton home para volver a la pagina de inicio
        cy.wait(1800)
        cy.contains('Home').realClick()

        //compruebo que la url es la correcta
        cy.wait(1800)
        cy.url().should('eq', 'http://localhost:3000/')
    })
})