Feature: Login Feature

  Background:
    Given user is on the home page
    When user clicks on the login page
  @login
  Scenario: Login with valid credentials
    When user enters valid username and password
    And user clicks on login
    Then user can see the username in the dashboard
  @invalidLogin
  Scenario Outline: Login with invalid credentials
    When user enters username "<username>" and password "<password>"
    And user clicks on login
    Then user should see the error message "<errorMessage>"

    Examples:
      | username       | password     | errorMessage                         |
      | vithya@test.com | 1234 | Your email or password is incorrect! |
      | vit@123.com   | 12 | Your email or password is incorrect! |
