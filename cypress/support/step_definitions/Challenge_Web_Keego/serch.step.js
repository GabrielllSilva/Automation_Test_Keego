/// <reference types="cypress" />
/* global Then, When, Given */
const LoginPage = require('../../pages/login.page')
const AddProductToCartPage = require('../../pages/addProductToCart.page')
const SearchPage = require('../../pages/search.page')

// Scenario: Search Product with success

Given('i am logged', () => {
    cy.visit('/')
    LoginPage.clickSignInBtn()
    LoginPage.sendInformationLogin()
})

When('search for a specific product', () =>{
    AddProductToCartPage.searchProduct()
    AddProductToCartPage.addProduct()

})

Then('the platform must return one or more items', () => {    
    SearchPage.validateReturnedProducts()
})

// Scenario: Search Product with success when user dont have register

Given('i am not logged', () => {
    cy.visit('/')
})