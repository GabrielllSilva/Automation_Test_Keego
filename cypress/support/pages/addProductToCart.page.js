const AddProductsElements = require('../elements/addProductToCart.elements')

export default class AddProductToCartPage {

    static searchBar() {
        return AddProductsElements.inputProductOnSearchBar().type('Printed Chiffon Dress')
    }

    static btnSearchBar() {
        return AddProductsElements.btnSearchBar().click()
    }

    static searchProduct() {
        return  this.searchBar().then(() => {
            this.btnSearchBar()
        })
    }

    static addProduct() {
        return AddProductsElements.selectProduct().click()
    }

    static validateAddedProduct() {
        return AddProductsElements.validateProduct().should('contain.text', 'Product successfully added to your shopping cart')
    }
}