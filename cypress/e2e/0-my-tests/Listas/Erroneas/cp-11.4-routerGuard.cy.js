describe('Navegar desde el url a el apartado de administracion', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')

        //visito el la pagina de administracion
        cy.visit('http://localhost:3000/adminPage')

        //compruebo que fui redirigido a la pagina de login
        cy.url().should('include', '/adminLog')
    })
})
