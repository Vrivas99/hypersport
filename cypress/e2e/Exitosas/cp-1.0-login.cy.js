describe('ambos campos vacios', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    
    cy.wait(100)
    //presiona el boton ingresar
    cy.contains('Ingresar').click()

    //me aseguro de que los campos esten en blanco
    cy.get('#mail').should('have.value','')
    cy.get('#passw').should('have.value','')
    
    //pulso ingresar
    cy.contains('Ingresar').click()
    
    //valido si los campos son invalidos (en este caso valido el invalid del required)
    cy.get(':invalid').should('exist')
    
  })
  
})

