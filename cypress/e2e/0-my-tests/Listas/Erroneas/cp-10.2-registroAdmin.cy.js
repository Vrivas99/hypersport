import 'cypress-real-events'
describe('Agregar un administrador con algunos campos vacios', () => {
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
        cy.wait(1000)
        cy.get('.space-y-2 > :nth-child(2) > .flex').click()

        //pulso el boton de Ingresar
        cy.wait(1000)
        cy.contains('Ingresar').click()

        //escribo el correo correcto, la contraseña vacia y el confirmar contraseña correcto
        cy.wait(1000)
        
        cy.get('#grid-correo').type('admin2@test.cl')
        cy.get('#grid-password').should('be.empty')
        cy.get('#grid-password2').type('123456')

        //pulso el boton de Agregar
        cy.wait(1000)
        cy.contains('Agregar').click()

        //valido si los campos son invalidos (en este caso valido el invalid del required)
        //valido mensajes de error 
         cy.contains("Correo o contraseña incorrecta").should('exist')
        
    })
})