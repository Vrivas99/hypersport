describe('todos los campos pero correo invalido', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      
      cy.wait(100)
      //Presiono el boton Ingresar
      cy.contains('Ingresar').click()

      //pulso ingresar
      cy.contains('¿No tienes cuenta? Registrate Aqui!').click()
      
      
    })
    
  })