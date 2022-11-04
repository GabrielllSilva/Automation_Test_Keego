

export default class addProductToCart {
    static inputProductOnSearchBar() {
        return cy.get('#search_query_top')
    }

    static btnSearchBar() {
        return cy.get('#searchbox > .btn')
    }

    static selectProduct() {
        return cy.get('.first-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
    }

    static validateProduct() {
        return cy.get('.layer_cart_product > h2')
    }

}