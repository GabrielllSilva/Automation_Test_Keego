/// <reference types="cypress" />
/* global Then, When, Given */
const LoginPage = require('../../pages/login.page')
const AddProductToCartPage = require('../../pages/addProductToCart.page')
const ValidateOnCartPage = require('../../pages/validateProductOnCart.page')

// Scenario: Add one product with success
Given('i am logged', () => {
    cy.visit('/')
    LoginPage.clickSignInBtn()
    LoginPage.sendInformationLogin()
})

When('select and choose the product of my preference', () =>{
    AddProductToCartPage.searchProduct()
    AddProductToCartPage.addProduct()
})

And('clicking in Add to cart the product must add with success', () =>{
    AddProductToCartPage.validateAddedProduct()
})

Then('the products must be on cart with respective values', () => {
    ValidateOnCartPage.validateReturnedProducts()
    ValidateOnCartPage.productOnCart()
    ValidateOnCartPage.validateStatusStock()
    ValidateOnCartPage.validateCountingCart()
})