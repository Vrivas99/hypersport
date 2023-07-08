import 'cypress-real-events'
describe('Modificar un producto', () => {
    it('passes', () => {
        //Visito el login del administrador 
        cy.visit('http://localhost:3000/adminLog')

        //escribo el correo y la contraseña del administrador

        cy.get(':nth-child(2) > .bg-gray-50').type('admin@ejemplo.cl')

        cy.get('#password').type('admin123')

        //pulso ingresar
        cy.contains('Ingresar').click()

        //valido que el url sea el correcto
        cy.wait(2000)
        cy.url().should('include', '/adminPage')

        //pulso el boton de modificar
        cy.get(':nth-child(1) > .px-6 > .text-blue-600').click()

        //Elimino el nombre del producto
        cy.get('#\\31').clear()

        //ingreso el nuevo nombre
        cy.get('#\\31').type('Raqueta de Grafito Sufix Encounter1')

        //Elimino la URL de la imagen
        cy.get('#\\32').clear()

        //ingreso la nueva URL
        cy.get('#\\32').type('https://www.jensen-localization.com/wp-content/uploads/2014/10/Testing.jpg')

        //Elimino la descripcion
        cy.get('#\\33').clear()

        //ingreso la nueva descripcion
        cy.get('#\\33').type('Descripcion modificada')

        //cambio la categoria
        cy.get('#cate').select('Tennis')


        //Elimino el precio
        cy.get('#\\34').clear()

        //ingreso el nuevo precio
        cy.get('#\\34').type('100000')

        //elimino el descuento
        cy.get('#\\35').clear()

        //ingreso el nuevo descuento
        cy.get('#\\35').type('0')
        
        //elimino el stock
        cy.get('#\\36').clear()

        //ingreso el nuevo stock
        cy.get('#\\36').type('10')

        //pulso el boton de guardar

        cy.contains('Guardar').realClick()

        //valido que el producto se haya modificado
        cy.wait(2000)
        cy.contains('Raqueta de Grafito Sufix Encounter1').should('exist')
    })


})