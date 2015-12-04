module.exports = User;

var Model = require('./Model.js');

var UserSchema = {
  username: String,
  password: String
};

function User() {
  Model.call(this, UserSchema);
}

Model.extend(User);