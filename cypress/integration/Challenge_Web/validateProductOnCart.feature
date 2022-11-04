Feature: Validate Products on Cart

    Scenario: Validate Products on Cart
    Given i am logged
    When select and choose the product of my preference
    And clicking in Add to cart the product must add with success
    Then the products must be on cart with respective values