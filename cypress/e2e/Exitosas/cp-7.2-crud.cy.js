import 'cypress-real-events'
describe('Modificar un producto con algunos campos vacios', () => {
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

        //pulso el boton de modificar
        cy.get(':nth-child(1) > .px-6 > .text-blue-600').click()

        //Elimino el nombre del producto
        cy.get('#\\31').clear()

        //ingreso el nuevo nombre
        cy.get('#\\31').type('Raqueta de Grafito Sufix Encounter')

        //Elimino la URL de la imagen
        cy.get('#\\32').clear()

        //Elimino la descripcion
        cy.get('#\\33').clear()

        //cambio la categoria
        cy.get('#cate').select('Tennis')

        //Elimino el precio
        cy.get('#\\34').clear()

        //ingreso el nuevo precio
        cy.get('#\\34').type('1')

        //elimino el descuento
        cy.get('#\\35').clear()

        //elimino el stock
        cy.get('#\\36').clear()

        //ingreso el nuevo stock
        cy.get('#\\36').type('10')

        //pulso el boton de guardar
        cy.contains('Guardar').realClick()

        //valido que se visualicen los mensajes de error
        cy.contains('El campo Url Imagen es obligatorio').should('be.visible')

        cy.contains('El campo Descripción es obligatorio').should('be.visible')

        cy.contains('El campo Descuento es obligatorio').should('be.visible')
    })


})