const names = require("./04-names.js");
const sayHi = require("./05-utils.js");
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

console.log(names);

sayHi("Kate");
sayHi(names.first);
sayHi(names.second);

console.log(data);