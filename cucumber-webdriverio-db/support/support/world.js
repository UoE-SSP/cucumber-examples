var oracledb = require('oracledb');
var config = require('../config.js');

module.exports = {
  context: {},
  getDB: function() {
    return new Promise(function(resolve, reject) {
      oracledb.getConnection(
        {
          user          : config.user,
          password      : config.password,
          connectString : config.connectString
        },
        function(err, connection) {
          if (err) { reject(err.message); return; }
          resolve(connection);
        }
      )
    })
  }
};
