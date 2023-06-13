describe('registrar usuaio con datos ya registrados', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      
      cy.wait(100)
      //Presiono el boton Ingresar
      cy.contains('Ingresar').click()

      //voy al apartado de registrarse
      cy.contains('¿No tienes cuenta? Registrate Aqui!').click()
      
      
      
    })
    
  })