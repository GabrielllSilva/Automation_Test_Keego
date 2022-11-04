Feature: Access the environment

    Scenario: Login Success
    Given i am on main page
    When click on sign-in
        And input the correct user and password
    Then after submit the system must the login with success

    Scenario: Login with User Incorrect
    Given i am on main page
    When click on sign-in
        And input the incorrect user
    Then after submit the system mustnt the login

    Scenario: Login with Password Incorrect
    Given i am on main page
    When click on sign-in
        And input the incorrect password
    Then after submit the system mustnt the login

    Scenario: Login without Password
    Given i am on main page
    When click on sign-in
        And input the user only
    Then after submit the system must return password required

    Scenario: Login without User
    Given i am on main page
    When click on sign-in
        And input the password only
    Then after submit the system must return email required
