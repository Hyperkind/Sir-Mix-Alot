module.exports = Account;

var Model = require('./Model.js');
var User = require('./User.js');

var AccountSchema = {
  user : User,
  accountNumber : Number,
  address : String,
  balance : Number
};

function Account() {
  Model.call(this, AccountSchema);
}

Model.extend(Account);