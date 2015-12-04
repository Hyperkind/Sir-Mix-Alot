module.exports = Message;

var Model = require('./Model.js');
var User = require('./User.js');

var MessageSchema = {
  from : User,
  to : User,
  message : String,
  sent : Date
};

function Message() {
  Model.call(this, MessageSchema);
}

Model.extend(Message);
