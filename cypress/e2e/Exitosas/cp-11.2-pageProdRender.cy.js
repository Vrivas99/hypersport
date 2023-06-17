describe('Ver si la pagina de 1 producto renderizo correctamente', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')

        //hago click en el primer producto
        cy.get('.grid > :nth-child(1)').click()

        //reviso los datos del producto
        //reviso la foto del producto
        cy.get('.object-scale-down').should('exist')
        //reviso el nombre del producto
        cy.get('.grid > :nth-child(1) > .text-3xl').should('exist')
        //reviso la marca del producto
        cy.get('.grid > :nth-child(1) > p')
        //reviso el precio del producto
        cy.get('.grid > .font-bold').should('exist')
        //reviso la descripcion del producto
        cy.get('.text-justify').should('exist')
        //reviso el boton de agregar al carrito
        cy.get('.grid > .cursor-pointer').should('exist')

    })
})