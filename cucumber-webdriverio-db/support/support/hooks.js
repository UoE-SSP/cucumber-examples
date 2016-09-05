/*eslint-disable no-invalid-this*/
'use strict';

var world = require('./world.js');

// Create WebdriverIO client
var webdriverio = require('webdriverio');
var client = webdriverio.remote({ desiredCapabilities: { browserName: 'chrome' } });

// Start new client driver on test start, kill afterwards
module.exports = function() {
  this.Before(function(scenario, done) {
    world.driver = client.init().call(done);
  });

  this.After(function(scenario, done) {
    world.context = {};

    world.driver
      .end()
      .then(function() {
        done();
      });
  });
};
