
/*

Objective:
The objective of the 'categorias' function is to render the Navbar component on the page.

Inputs:
The 'categorias' function does not take any inputs.

Flow:
1. The 'categorias' function is called.
2. The function returns the Navbar component.
3. The Navbar component renders a navigation bar with links and a logo.

Outputs:
The main output of the 'categorias' function is the Navbar component, which renders a navigation bar on the page.

Additional aspects:
- The Navbar component uses the useState hook to toggle the visibility of the mobile menu.
- The Navbar component also renders child components, such as the Carrito component.
- The Navbar component uses the Link component from the Next.js framework to create links to different pages.
*/
import Navbar from "./Navbar";


describe('categorias_function', () => {

    // Tests that the Navbar component renders without errors.
    it("test_navbar_renders_without_errors", () => {
        cy.mount(<Navbar />)
        cy.get('.bg-black').should('exist')
    })

    // Tests that the categorias function renders without errors.
    it("test_categorias_renders_without_errors", () => {
        cy.mount(<categorias />)
        cy.get('.bg-black').should('exist')
    })

    // Tests that the categorias function only renders the Navbar component.
    it("test_categorias_renders_only_navbar_component", () => {
        cy.mount(<categorias />)
        cy.get('.bg-black').should('exist')
        cy.get('.bg-black').should('be.visible')
        cy.get('.bg-black').should('be.length', 1)
    })

    // Tests that the Navbar component receives the children prop.
    it("test_navbar_receives_children_prop", () => {
        cy.mount(<Navbar>Test Children</Navbar>)
        cy.get('.bg-black').should('exist')
        cy.contains('Test Children').should('exist')
    })

    // Tests that the Navbar component toggles the menu on mobile devices.
    it("test_navbar_toggles_menu_on_mobile_devices", () => {
        cy.viewport('iphone-6')
        cy.mount(<Navbar />)
        cy.get('.bg-black').should('exist')
        cy.get('.bg-black').should('be.visible')
        cy.get('.bg-purple-600').click()
        cy.get('.left-0').should('exist')
        cy.get('.left-0').should('be.visible')
    })

    // Tests that the categorias function returns the expected output.
    it("test_categorias_returns_expected_output", () => {
        const expectedOutput = '<div class="md:sticky md:top-0 z-50"><nav class="bg-black"><div class="flex items-center font-medium justify-around"><div class="z-50 md:w-auto w-full flex justify-between"><a href="/"><img src="Logo" class="md:cursor-pointer h-24 w-24" alt="Imagen Prod"/></a><div class="p-7 md:hidden"><button class="bg-purple-600 text-white px-6 py-2 rounded-full font-sans" name="false">Menu</button></div></div><ul class="md:flex hidden uppercase items-center gap-5 font-sans text-white"><li><a href="/" class="py-7 px-3 inline-block hover:text-purple-600">Home</a></li></ul><div class="md:block hidden"><button class="bg-purple-600 text-white px-6 py-2 rounded-full font-sans">Cart</button></div><ul class="z-40 md:hidden absolute w-full h-full bottom-0 py-24 pl-4 uppercase text-white bg-black duration-500 left-[-100%]"><li><a href="/" class=" z-50 py-7 px-3 inline-block hover:text-purple-600">Home</a></li><div class="py-5"><button class="bg-purple-600 text-white px-6 py-2 rounded-full font-sans">Cart</button></div></ul></div></nav><Carrito /></div>'
        cy.mount(<categorias />)
        cy.get('.bg-black').should('exist')
        cy.get('.bg-black').should('be.visible')
        cy.get('.bg-black').should('have.length', 1)
        cy.get('.bg-black').invoke('prop', 'outerHTML').should('eq', expectedOutput)
    })
});
