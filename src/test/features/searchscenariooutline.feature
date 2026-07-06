@searchSO
Feature: Search feature using the scenario outline

Background:
    Given the user is on the automation exercise website

Scenario Outline: Search products using the scenario outline
    When the user click the products
    Then the user navigates to the all product details page
    When the user search for the particular product "<product>"
    And the user clicks the search button
    Then the searched product "<product>" should be displayed

Examples:
| product    |
| Blue Top   |
| Winter Top |