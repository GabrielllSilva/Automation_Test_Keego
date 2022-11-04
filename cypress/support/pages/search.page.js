const SearchElements = require('../elements/search.elements')

export default class SearchPage {
    
    static validateReturnedProducts() {
        return SearchElements.validateReturnProducts().should('contains.text', 'Printed Chiffon Dress')
    }
}