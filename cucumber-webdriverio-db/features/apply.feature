Feature: Postgraduate applications
  Should be able to apply to study

  Scenario: Can create application
    When I open the applications page
    And I click the button "Continue"
    And I enter my details
    And I click the button "Proceed"
    Then I should have an IPU record in the database
