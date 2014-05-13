var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var userCheck = function(username) {
  return new Promise(function(resolve, reject) {
    db.knex('users').where('username', '=', username);
  });
};


var User = db.Model.extend({
  tableName: 'users',
  links: function(){
    return this.hasMany(Link);
  }
});


module.exports = User;

