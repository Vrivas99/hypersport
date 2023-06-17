describe('Ingreso con datos correctos', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/adminLog')

        //escribo el correo y la contraseña del administrador incorrectas

        cy.get(':nth-child(2) > .bg-gray-50').type('admin@ejemplo.cl')

        cy.get('#password').type('admin123')

        //pulso ingresar
        cy.contains('Ingresar').click()

        //valido que el url sea el correcto
        cy.url().should('include', '/adminPage')
        
    })

})