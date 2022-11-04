/// <reference types="cypress" />
/* global Then, When, Given */


// Scenario: Login Success

Given('i am on main page', () => {
    cy.visit('/')
})

When('click on sign-in', () =>{
    cy.get('.login').click()
})

And('input the correct user and password', () => {
    cy.get('#email').type('teste2021@teste.com.br')
    cy.get('#passwd').type('teste')
        .get('#SubmitLogin > span').click()
})


Then('after submit the system must the login with success', () => {
    cy.get('.account > span').should('have.text', 'asdfa afda')
})

// Scenario: Login with User Incorrect

And('input the incorrect user', () => {
    cy.get('#email').type('abcd@gmail.com')
    cy.get('#passwd').type('teste')
        .get('#SubmitLogin > span').click()
})


Then('after submit the system mustnt the login', () => {
    cy.get('ol > li').should('have.text', 'Authentication failed.')
})

// Scenario: Login with Password Incorrect

And('input the incorrect password', () => {
    cy.get('#email').type('teste2021@teste.com.br')
    cy.get('#passwd').type('efghi')
        .get('#SubmitLogin > span').click()
})


Then('after submit the system mustnt the login', () => {
    cy.get('ol > li').should('have.text', 'Authentication failed.')
})

// Scenario: Login without Password

And('input the user only', () => {
    cy.get('#email').type('teste2021@teste.com.br')
        .get('#SubmitLogin > span').click()
})


Then('after submit the system must return password required', () => {
    cy.get('ol > li').should('have.text', 'Password is required.')
})

// Login without User

And('input the password only', () => {
    cy.get('#passwd').type('efghi')
        .get('#SubmitLogin > span').click()
})


Then('after submit the system must return email required', () => {
    cy.get('ol > li').should('have.text', 'An email address required.')
})