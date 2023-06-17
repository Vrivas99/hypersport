describe('campos rellenos pero contraseñas distintas', () => {
  it('passes', () => {
      cy.visit('http://localhost:3000/')
      
      cy.wait(100)
    //Presiono el boton Ingresar
    cy.contains('Ingresar').click()

    //voy al apartado de registrarse
    cy.contains('¿No tienes cuenta? Registrate Aqui!').click()
    
    //reviso que la url sea la correcta
    cy.wait(800)
    cy.url().should('include', '/registro')

    //selecciono el input de correo electronic
    cy.wait(800)
    cy.get('#mail').type('vi.rivas@duocuc.cl')
    //selecciono el input de contraseña
    cy.wait(800)
    cy.get('#pas').type('123456')
    //selecciono el input de confirmar contraseña
    cy.wait(800)
    cy.get('#pas2').type('1234567')
    
    //pulso el boton de registrarte
    cy.wait(800)
    cy.contains('Registrarte').click()
  
    // reviso que se muestre mensaje de error
    cy.wait(800)
    cy.contains('Las contraseñas deben ser iguales').should('be.visible')
    })
    
  })