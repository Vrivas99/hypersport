import 'cypress-real-events'
describe('Agregar un producto con datos vacios', () => {
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

        //ingreso la nueva URL
        cy.get('#ulr').type('https://www.jensen-localization.com/wp-content/uploads/2014/10/Testing.jpg')

        //ingreso la nueva descripcion
        cy.get('#des').type('Este es un producto de testing')

        //cambio la categoria
        cy.get('#grid-state').select('Tennis')

        //verifico que el precio este vacio
        cy.get('#prec').should('be.empty')

        //ingreso el nuevo descuento
        cy.get('#desco').type('10')

        //verifico que el stock este vacio
        cy.get('#stok').should('be.empty')

        //pulso el boton de guardar

        cy.contains('Guardar').realClick()

        //valido si los campos son invalidos (en este caso valido el invalid del required)
        cy.get(':invalid').should('exist')
    })


})