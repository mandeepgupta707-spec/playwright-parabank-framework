Feature: ParaBank Registration and Login

  As a new user
  I want to register and login
  So that I can view my account balance

  Scenario: Register a new user and login successfully

    Given the user opens the ParaBank application
    When the user navigates to the registration page
    And the user registers with valid details
    Then the account should be created successfully
    When the user logs out
    And the user logs in with the registered credentials
    Then the Accounts Overview page should be displayed
    And the available balance should be printed in the console