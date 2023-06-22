describe('ambos datos correctos', () => {
    it('passes', () => {
        //visito la pagina
        cy.visit('http://localhost:3000/')

      cy.wait(100)

      //ingreso al apartado login
      cy.contains('Ingresar').click()

      //reviso que la url sea login
      cy.url().should('eq','http://localhost:3000/login')

      //Relleno el campo
      cy.get('#mail').type('hy.bustos@duocuc.cl')
      cy.get('#passw').type(123456)  

      //me aseguro de que los campos esten en blanco
      cy.get('#mail').should('have.value','hy.bustos@duocuc.cl')
      var cosa = cy.get('#mail')
      cy.get('#passw').should('have.value',123456)
      //pulso ingresar
      cy.contains('Ingresar').click()
      
      //reviso que la url sea el home nuevamente
      cy.wait(500)
      cy.url().should('eq','http://localhost:3000/')
      
      
      //lo que sigue esta totalmente de mas pero me va a servir luego
      /*
      
      
      cy.contains('Historial')
      cy.contains('Cerrar Sesion').click()


      //reviso que la url sea el login nuevamente
      cy.wait(500)
      cy.url().should('eq','http://localhost:3000/login')
       */
    })
    
  })
  