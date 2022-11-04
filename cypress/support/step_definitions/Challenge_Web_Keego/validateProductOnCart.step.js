/// <reference types="cypress" />
/* global Then, When, Given */

// Scenario: Add one product with success
Given('i am logged', () => {
    cy.visit('/')
        .get('.login').click()
            .get('#email').type('teste2021@teste.com.br')
                .get('#passwd').type('teste')
                    .get('#SubmitLogin > span').click()
})

When('select and choose the product of my preference', () =>{
    cy.get('#search_query_top').type('Printed Chiffon Dress')
        .get('#searchbox > .btn').click()
            .get('.first-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
                .click()
})

And('clicking in Add to cart the product must add with success', () =>{
    cy.get('.layer_cart_product > h2')
        .should('contain.text', 'Product successfully added to your shopping cart')
})

Then('the products must be on cart with respective values', () => {
    cy.get('.button-container > .button-medium > span').click()
        .get('.cart_description > .product-name > a').should('have.text', 'Printed Chiffon Dress')
            .get('.label').should('have.text', 'In stock')
                .get('.heading-counter').should('contains.text', 'Your shopping cart contains:')

})