export default class validateOnCart {

    static validateProductsOnCart() {
        return cy.get('.button-container > .button-medium > span')
    }

    static validateLabelProductsOnCart() {
        return cy.get('.cart_description > .product-name > a')
    }

    static statusStock() {
        return cy.get('.label')
    }

    static countingCart() {
        return cy.get('.heading-counter')
    }
}