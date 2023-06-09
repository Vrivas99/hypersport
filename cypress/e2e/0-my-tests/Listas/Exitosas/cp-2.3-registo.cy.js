describe('todos los campos pero correo invalido', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
      
      cy.wait(100)
      //Presiono el boton Ingresar
    cy.contains('Ingresar').click()

    //voy al apartado de registrarse
    cy.contains('¿No tienes cuenta? Registrate Aqui!').click()
    
    //reviso que la url sea la correcta
    cy.wait(2000)
    cy.url().should('include', '/registro')

    //selecciono el input de correo electronic
    cy.wait(2000)
    cy.get('#mail').type("hy'aaaaaaa.cl")
    //selecciono el input de contraseña
    cy.wait(2000)
    cy.get('#pas').type('123456')
    //selecciono el input de confirmar contraseña
    cy.wait(2000)
    cy.get('#pas2').type('123456')
    
    //pulso el boton de registrarte
    cy.wait(2000)
    cy.contains('Registrarte').click()
   
    //valido si los campos son invalidos (en este caso valido el invalid del required)
    cy.wait(2000)
    cy.get(':invalid').should('exist')
  
    })
    
  })