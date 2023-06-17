describe('ambos campos incorrectos', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      
      cy.wait(100)
      //Presiono el boton Ingresar
      cy.contains('Ingresar').click()

      //me aseguro de que los campos esten en blanco
      cy.get('#mail').type('aaasd@asdsa.com')
      cy.get('#passw').type('qwerty')  

      //pulso ingresar
      cy.contains('Ingresar').click()
      
      //valido mensajes de error 
      cy.contains("Correo o contraseña incorrecta").should('exist')
    })
    
  })