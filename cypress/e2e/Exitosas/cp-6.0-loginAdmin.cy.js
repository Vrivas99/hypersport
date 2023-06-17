describe('ambos campos vacios', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/adminLog')
      
      //me aseguro que el correo y la contraseña del administrador este vacio
      cy.get(':nth-child(2) > .bg-gray-50').should('be.empty')
        
      cy.get('#password').should('be.empty')

      //pulso ingresar
      cy.contains('Ingresar').click()

      //valido si los campos son invalidos (en este caso valido el invalid del required)
      cy.get(':invalid').should('exist')
    })
    
  })