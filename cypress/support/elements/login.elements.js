

export default class LoginElements {
    static inputEmailLogin() {
        return cy.get('#email')
    }

    static inputPasswdLogin() {
        return cy.get('#passwd')
    }

    static btnSignIn() {
        return cy.get('.login')
    }

    static btnSubmit() {
        return cy.get('#SubmitLogin > span')
    }

    static validateLoginSuccess() {
        return cy.get('.account > span')
    }

    static validateLoginFailed() {
        return cy.get('ol > li')
    }
    
}