describe('correo incorrecto contraseña correcta', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/adminLog')

        //escribo el correo y la contraseña del administrador incorrectas

        cy.get(':nth-child(2) > .bg-gray-50').type('adminnn@ejemplo.cl')

        cy.get('#password').type('admin123')

        //pulso ingresar
        cy.contains('Ingresar').click()

        //valido que se visualize el mensaje de error)
        cy.contains('Correo o contraseña incorrecta').should('be.visible')
    })

})