describe('correo incorrecto, contraseña correcta', () => {
    it('passes', () => {
        //visito la pagina
        cy.visit('http://localhost:3000/')
      

      cy.wait(100)

      //ingreso al apartado login
      cy.contains('Ingresar').click()

      //Relleno el campo
      cy.get('#mail').type('ky.busto@duocucc.cl')
      cy.get('#passw').type(123456)  

      //pulso ingresar
      cy.contains('Ingresar').click()

      //valido mensajes de error 
      cy.contains("Correo o contraseña incorrecta").should('exist')
    })
})