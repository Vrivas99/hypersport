describe('todos los campos vacios', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      
    cy.wait(100)
    //Presiono el boton Ingresar
    cy.contains('Ingresar').click()

    //voy al apartado de registrarse
    cy.contains('¿No tienes cuenta? Registrate Aqui!').click()
    
    //reviso que la url sea la correcta
    cy.wait(500)
    cy.url().should('include', '/registro')

    //selecciono el input de correo electronic
    cy.wait(500)
    cy.get('#mail').should('have.value','')
    //selecciono el input de contraseña
    cy.wait(500)
    cy.get('#pas').should('have.value','')
    //selecciono el input de confirmar contraseña
    cy.wait(500)
    cy.get('#pas2').should('have.value','')
    
    //pulso el boton de registrarte
    cy.wait(500)
    cy.contains('Registrarte').click()
    //valido si los campos son invalidos (en este caso valido el invalid del required)
    cy.wait(500)
    cy.get(':invalid').should('exist')
      
    })
    
  })