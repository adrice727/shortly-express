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
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options){
      var username = attrs.username;
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(attrs.password, salt);

      userCheck()
      .then(function(user) {
        // re-direct to login, if user found
      }).catch(function(e){
        // create a new user in the database

      });
    });
  }
});

module.exports = User;

