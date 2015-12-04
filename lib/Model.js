module.exports = Model;

var DataStore = require('./DataStore.js').store;
var Extend = require('./Extend');

function Model (schema) {
  this.schema = schema;
  this.id = null;

  for (var i in schema) {
    this[i] = null;
  }
  DataStore[this.constructor.name] = DataStore[this.constructor.name] || [];

}

Model.getNextId = function () {
  return DataStore[this.name].length + 1;
};

Model.find = function (id) {
  for(var i = 0; i < DataStore[this.name].length; i++) {
    if(DataStore[this.name][i].id === id) {
      return DataStore[this.name][i];
    }
  }
  return null;
};

Model.extend = function (klass) {
  for(var i in this) {
    klass[i] = this[i];
  }
  for(var j in this.prototype) {
    klass.prototype[j] = this.prototype[j];
  }
};


Model.prototype.save = function (id) {
  if(this.id === null) {
    this.id = this.constructor.getNextId();
    DataStore[this.constructor.name].push(this);
  }
};

Model.prototype.destroy = function () {
  var doc = DataStore[this.constructor.name];
  if(this.id !== null) {
    var obj = this.constructor.find(this.id);
    var id = doc.indexOf(obj);
    doc.splice(id, 1);
  }
};


