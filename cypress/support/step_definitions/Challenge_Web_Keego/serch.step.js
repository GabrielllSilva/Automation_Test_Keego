/// <reference types="cypress" />
/* global Then, When, Given */

// Scenario: Search Product with success

Given('i am logged', () => {
    cy.visit('/')
        .get('.login').click()
            .get('#email').type('teste2021@teste.com.br')
                .get('#passwd').type('teste')
                    .get('#SubmitLogin > span').click()
})

When('search for a specific product', () =>{
    cy.get('#search_query_top').type('Printed Chiffon Dress')
        .get('#searchbox > .btn').click()

})

Then('the platform must return one or more items', () => {    
    cy.get('#center_column').should('contains.text', 'Printed Chiffon Dress')
})

// Scenario: Search Product with success when user dont have register

Given('i am not logged', () => {
    cy.visit('/')
})