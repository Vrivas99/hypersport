describe('ambos campos erroneos', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/adminLog')
      
      //escribo el correo y la contraseña del administrador incorrectas

        cy.get(':nth-child(2) > .bg-gray-50').type('addmin@a.cl')

        cy.get('#password').type('123456')

        
      //pulso ingresar
      cy.contains('Ingresar').click()

      //valido que se visualize el mensaje de error)
      cy.contains('Correo o contraseña incorrecta').should('be.visible')
    })
    
  })