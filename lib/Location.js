module.exports = Location;

var Model = require('./Model.js');

var LocationSchema = {
  lng : Number,
  lat : Number
};

function Location() {
  Model.call(this, LocationSchema);
}

Model.extend(Location);