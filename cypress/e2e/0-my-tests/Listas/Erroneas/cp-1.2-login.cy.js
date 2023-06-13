describe('correo correcto, contraseña incorrecta', () => {
    it('passes', () => {
        //visito la pagina
        cy.visit('http://localhost:3000/')

      cy.wait(100)
      //Presiono el boton ingresar
      cy.contains('Ingresar').click()

      //Relleno el campo
      cy.get('#mail').type('hy.bustos@duocuc.cl')
      cy.get('#passw').type('qwerty')  

      //pulso ingresar
      cy.contains('Ingresar').click()

      //valido mensajes de error 
      cy.contains("Correo o contraseña incorrecta").should('exist')
    })
})