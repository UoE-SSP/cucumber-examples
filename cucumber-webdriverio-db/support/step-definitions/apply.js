module.exports = function() {
  var world = require('../support/world.js');

  function randomString(len) {
    for (var i = 0, str = ''; i < len; i++) str += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return str;
  }

  this.When(/^I open the applications page$/, function() {
    return world.driver
      .url('https://www-dev.star.euclid.ed.ac.uk/public/urd/sits.urd/run/siw_ipp_lgn.login?process=siw_ipp_app&code1=PRPHDGEOGE1F&code2=0086');
  });

  this.When(/^I click the button "([A-Za-z0-9]+)"$/, function(button) {
    return world.driver
      .click(`[value="${button}"]`)
  });

  this.When(/^I enter my details$/, function() {
    world.context.email = randomString(10) + '@fakesite.test';

    return world.driver
      .setValue('#IPU_FNM1', 'Lucy')
      .setValue('#IPU_SURN', 'Test Student')
      .click('#IPU_DOB')
      .selectByVisibleText('.ui-datepicker-year', '1973')
      .click('=2')
      .setValue('#IPU_HAEM', world.context.email)
      .selectByVisibleText('#selectUdf8', 'No');
  });

  this.Then(/^I should have an IPU record in the database$/, function() {
    return world.getDB().then(function(db) {
      return db.execute(`
        SELECT IPU_FNM1, IPU_SURN
        FROM SRS_IPU
        WHERE UPPER(IPU_HAEM) = :email`,
        {email: world.context.email.toUpperCase()}
      ).then(function(result) {
        if (result.rows[0][0] !== 'LUCY' && result.rows[0][1] !== 'TEST STUDENT') {
          throw new Error('Could not find record for test student');
        }
      });
    });
  });
};
