module.exports = function() {
  var world = require('../support/world.js');

  this.Given(/^that I am on the University of Edinburgh homepage$/, function() {
    return world.driver
      .url('http://www.ed.ac.uk/');
  });

  this.When(/^I search for "([A-Za-z0-9]+)"$/, function(search) {
    return world.driver
      .setValue('#uoe-search', search)
      .keys('\uE007');
  });

  this.When(/^I open the phone numbers tab$/, function() {
    return world.driver
      .click('*=Phone numbers');
  });

  this.Then(/^the phone number for "([A-Za-z0-9 ]+)" should be "([0-9]{6})"$/, function(owner, expectedNumber) {
    return world.driver
      .getText(`//td[contains(., "${owner}")]/parent::tr/td[3]`)
      .then(function(actualNumber) {
        actualNumber = actualNumber.trim();
        if (actualNumber !== expectedNumber) {
          throw new Error(`Expected phone number to be ${expectedNumber}, but it's ${actualNumber}`);
        }
      });
  });
};
