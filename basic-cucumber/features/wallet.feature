Feature: Wallet
  My wallet should hold money

  Scenario: Can add money to my wallet
    Given that I have a wallet
    When I add £5
    And I add £10
    Then the total in the wallet should be £15
