let util = require('util');

function Car() {}

Car.prototype.logName = function () {
    console.log('This name is: ', this.name);
};

function BMW(name) {
    this.name = name || 'Unknown BMW model';
}

BMW.prototype.drive = function () {
    console.log(`I'm driving!`);
};

util.inherits(BMW, Car);

let bmw = new BMW('X5');
bmw.drive();
bmw.logName();
