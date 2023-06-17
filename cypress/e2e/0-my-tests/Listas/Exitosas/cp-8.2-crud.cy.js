import 'cypress-real-events'
describe('Agregar un producto con todos los campos vacios', () => {
    it('passes', () => {
     
        //Visito el login del administrador 
        cy.visit('http://localhost:3000/adminLog')

        //escribo el correo y la contraseña del administrador

        cy.get(':nth-child(2) > .bg-gray-50').type('admin@ejemplo.cl')

        cy.get('#password').type('admin123')

        //pulso ingresar
        cy.contains('Ingresar').click()

        //valido que el url sea el correcto
        cy.url().should('include', '/adminPage')

        //pulso el boton de Ingresar Producto
        cy.contains('Ingresar Producto').click()

        //me aseguro que el nuevo nombre este vacio
        cy.get('#tit').should('be.empty')

        //me aseguro que la nueva URL este vacia
        cy.get('#ulr').should('be.empty')

        //me aseguro que la nueva descripcion este vacia
        cy.get('#des').should('be.empty')

        //me aseguro que la categoria este vacia
        cy.get('#grid-state').select('.....')
        
        //verifico que el precio este vacio
        cy.get('#prec').should('be.empty')

        //verifico que el descuento este vacio
        cy.get('#desco').should('be.empty')

        //verifico que el stock este vacio
        cy.get('#stok').should('be.empty')
        
        //pulso el boton de guardar
        cy.contains('Guardar').realClick()

        //valido si los campos son invalidos (en este caso valido el invalid del required)
        cy.get(':invalid').should('exist')
    })


})