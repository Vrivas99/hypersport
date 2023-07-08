import 'cypress-real-events'
describe('Agregar un administrador correctamente', () => {
    it('passes', () => {

        //Visito el login del administrador 
        cy.visit('http://localhost:3000/adminLog')

        //escribo el correo y la contraseña del administrador

        cy.get(':nth-child(2) > .bg-gray-50').type('admin@ejemplo.cl')

        cy.get('#password').type('admin123')

        //pulso ingresar
        cy.contains('Ingresar').click()

        //valido que el url sea el correcto
        cy.url().should('include', '/adminPage')

        //pulso el boton de administradores
        cy.wait(1800)
        cy.get('.space-y-2 > :nth-child(2) > .flex').click()

        //pulso el boton de Ingresar
        cy.wait(1800)
        cy.contains('Ingresar').click()

        //escribo el correo y la contraseña del administrador
        cy.wait(1800)
        
        cy.get('#grid-correo').type('admin2@test.cl')
        cy.get('#grid-password').type('123456')
        cy.get('#grid-password2').type('123456')

        //pulso el boton de Agregar
        cy.wait(1800)
        cy.contains('Agregar').click()

        //verifico que el url sea el correcto
        cy.wait(1800)
        cy.url().should('include', '/adminpageuser')
        //valido que el administrador se haya creado correctamente
        cy.wait(1800)
        cy.contains('admin2@test.cl')

        
    })
})