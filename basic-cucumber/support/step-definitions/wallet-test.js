module.exports = function() {
  var Wallet = require('../../Wallet.js');
  var world = require('../support/world.js');

  this.Given(/^that I have a wallet$/, function() {
    world.wallet = new Wallet();
  });

  this.When(/^I add £([0-9]+)$/, function(num) {
    world.wallet.add(num);
  });

  this.When(/^I remove £([0-9]+)$/, function(num) {
    world.wallet.remove(num);
  });

  this.Then(/^the total in the wallet should be £([0-9]+)$/, function(expectedTotal) {
    if (world.wallet.getTotal() !== parseInt(expectedTotal, 10)) {
      throw new Error(`Expected total to be ${expectedTotal}, but it's ${world.wallet.getTotal()}`);
    }
  });
};
