import 'cypress-real-events'
describe('Eliminar un producto', () => {
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
        cy.wait(1000)


        //el siguiente bloque sera explicado detalladamente

        // Encontrar la tabla utilizando la clase "w-full"
        cy.get('.w-full').within(() => {
        /**
         *? En esta línea, utilizamos cy.get('.w-full') para buscar la tabla dentro del DOM
         *? utilizando la clase CSS "w-full".
         *? within() se utiliza para limitar el alcance de las búsquedas dentro de la tabla.
         */
            
            // Encontrar todas las filas de la tabla
            cy.get('tr').then((filas) => {
            /**
             * ? Aquí, utilizamos cy.get('tr') para encontrar todas las filas (<tr>) dentro de la tabla.
             * ? El método then() se utiliza para acceder al resultado de la búsqueda y realizar
             * ? operaciones adicionales.
             * */    

                // Obtener la última fila
                const ultimaFila = filas[filas.length - 1];
                /**
                 * ? En esta línea, accedemos al último elemento del array filas utilizando filas.length - 1
                 * ? y lo asignamos a la variable ultimaFila. Esto nos permite obtener la referencia a la última
                 * ? fila de la tabla.
                 */

                // Hacer scroll hasta la última fila
                cy.wrap(ultimaFila).scrollIntoView();
                /**
                 * ? Aquí, utilizamos cy.wrap(ultimaFila) para envolver la última fila en un objeto Cypress y
                 * ? luego aplicamos el método scrollIntoView() para hacer scroll hasta esa fila. Esto garantiza
                 * ? que la última fila esté visible en la pantalla.
                 * */

                // Realizar acciones específicas en la última fila
                cy.wrap(ultimaFila).within(() => {
                    cy.contains('ELIMINAR').click();
                });
                            /**
                 * ? Dentro del bloque within(), buscamos el botón de eliminar dentro de la última fila 
                 * ? utilizando cy.contains('ELIMINAR'). Luego, utilizamos .click() para hacer clic en el 
                 * ? botón de eliminar y realizar la acción correspondiente.
                 */

                // Verificar que la última fila ya no exista           
                cy.wrap(ultimaFila).should('not.exist');
                /**
                 * ? Por último, utilizamos cy.wrap(ultimaFila).should('not.exist') para verificar que la última
                 * ? fila ya no exista en el DOM. Esto nos permite verificar que la fila se eliminó correctamente.
                 * */

            });
        });

    })
})