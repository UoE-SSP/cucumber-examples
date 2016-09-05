Feature: University of Edinburgh search functionality
  Should be able to search

  Scenario: Can find phone numbers
    Given that I am on the University of Edinburgh homepage
    When I search for "reception"
    And I open the phone numbers tab
    Then the phone number for "Main Library Reception" should be "508382"
