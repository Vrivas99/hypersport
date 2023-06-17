describe('Navegar hasta el apartado de historial desde la url', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')

      //visito el historial
        cy.visit('http://localhost:3000/historial')

        //compruebo que fui redirigido a la pagina de login
        cy.url().should('include', '/login')
        
    })
})
