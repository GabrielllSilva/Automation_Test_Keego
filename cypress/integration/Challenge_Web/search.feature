Feature: Searching a product

    Scenario: Search Product with success
    Given i am logged
    When search for a specific product 
    Then the platform must return one or more items

    Scenario: Search Product with success when user dont have register
    Given i am not logged
    When search for a specific product 
    Then the platform must return one or more items