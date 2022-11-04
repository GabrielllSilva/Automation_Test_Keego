/// <reference types="cypress" />
/* global Then, When, Given */
const LoginPage = require('../../pages/login.page')


// -----------------------------------------------------------------------------------------------------

// Scenario: Login Success

Given('i am on main page', () => {
    cy.visit('/')
})

When('click on sign-in', () =>{
    LoginPage.clickSignInBtn()
})

And('input the correct user and password', () => {
    LoginPage.sendInformationLogin()
})


Then('after submit the system must the login with success', () => {
    LoginPage.validateUserLogged()
})

// -----------------------------------------------------------------------------------------------------

// Scenario: Login with User Incorrect

And('input the incorrect user', () => {
    LoginPage.sendIncorrectUserLogin()
})


Then('after submit the system mustnt the login', () => {
    LoginPage.validateUserNotLogged()
})

// -----------------------------------------------------------------------------------------------------

// Scenario: Login with Password Incorrect

And('input the incorrect password', () => {
    LoginPage.sendIncorrectPasswdLogin()
})


Then('after submit the system mustnt the login', () => {
    LoginPage.validateUserNotLogged()
})

// -----------------------------------------------------------------------------------------------------

// Scenario: Login without Password

And('input the user only', () => {
    LoginPage.sendEmailOnly()
})


Then('after submit the system must return password required', () => {
    LoginPage.validatePasswdRequired()
})

// ----------------------------------------------------------------------------------------------------

// Login without User

And('input the password only', () => {
    LoginPage.sendPasswdOnly()
})


Then('after submit the system must return email required', () => {
    LoginPage.validateUserRequired()
})