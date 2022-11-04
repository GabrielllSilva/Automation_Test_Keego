const LoginElements = require('../elements/login.elements')

export default class LoginPage {

    static informEmailLogin() {
        return LoginElements.inputEmailLogin().type('teste2021@teste.com.br')
    }

    static informIncorrectEmailLogin() {
        return LoginElements.inputEmailLogin().type('abcd@gmail.com')
    }

    static informPasswdLogin() {
        return LoginElements.inputPasswdLogin().type('teste')
    }

    static informIncorrectPasswdLogin() {
        return LoginElements.inputPasswdLogin().type('efghi')
    }

    static clickSubmitBtn() {
        return LoginElements.btnSubmit().click()
    }

    static clickSignInBtn() {
        return LoginElements.btnSignIn().click()
    }

    static sendInformationLogin() {
        return  this.informEmailLogin().then(() => {
                this.informPasswdLogin().then(() => {
                    this.clickSubmitBtn()
                })
        })
    }

    static sendEmailOnly() {
        return  this.informEmailLogin().then(() => {
            this.clickSubmitBtn()
            
        })
    }

    static sendPasswdOnly() {
        return  this.informPasswdLogin().then(() => {
            this.clickSubmitBtn()
                
        })
    }

    static sendIncorrectUserLogin() {
        return  this.informIncorrectEmailLogin().then(() => {
                this.informPasswdLogin().then(() => {
                    this.clickSubmitBtn()
                })
        })
    }

    static sendIncorrectPasswdLogin() {
        return  this.informEmailLogin().then(() => {
                this.informIncorrectPasswdLogin().then(() => {
                    this.clickSubmitBtn()
                })
        })
    }

    static validateUserLogged() {
        return LoginElements.validateLoginSuccess().should('have.text', 'asdfa afda')
    }

    static validateUserNotLogged() {
        return LoginElements.validateLoginFailed().should('have.text', 'Authentication failed.')
    }

    static validatePasswdRequired() {
        return LoginElements.validateLoginFailed().should('have.text', 'Password is required.')
    }

    static validateUserRequired() {
        return LoginElements.validateLoginFailed().should('have.text', 'An email address required.')
    }


}