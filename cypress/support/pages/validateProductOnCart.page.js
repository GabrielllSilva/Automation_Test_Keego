const ValidateOnCartElements = require('../elements/validateProductOnCart.elements')

export default class ValidateOnCartPage {
    
    static validateReturnedProducts() {
        return ValidateOnCartElements.validateProductsOnCart().click()
    }

    static productOnCart() {
        return ValidateOnCartElements.validateLabelProductsOnCart().should('have.text', 'Printed Chiffon Dress')
    }

    static validateStatusStock() {
        return ValidateOnCartElements.statusStock().should('have.text', 'In stock')
    }

    static validateCountingCart() {
        return ValidateOnCartElements.countingCart().should('contains.text', 'Your shopping cart contains:')
    }
}