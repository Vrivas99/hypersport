import 'cypress-real-events'
describe('Agregar un producto con todo correcto', () => {
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

        //ingreso el nuevo nombre
        cy.get('#tit').type('Producto de testing')

        //ingreso la nueva URL
        cy.get('#ulr').type('https://www.jensen-localization.com/wp-content/uploads/2014/10/Testing.jpg')

        //ingreso la nueva descripcion
        cy.get('#des').type('Este es un producto de testing')

        //cambio la categoria
        cy.get('#grid-state').select('Tennis')

        //ingreso el nuevo precio
        cy.get('#prec').type('100')

        //ingreso el nuevo descuento
        cy.get('#desco').type('10')

        //ingreso el nuevo stock
        cy.get('#stok').type('1')

        //pulso el boton de guardar

        cy.contains('Guardar').realClick()

        //valido que el producto se haya modificado
        cy.contains('Producto de testing').should('exist')
    })


})