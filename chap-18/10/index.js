// function Car() {
//     this.name = name;
// }
//
// Car.prototype.logName = function() {
//     console.log(this.name);
// }
//
// let car = new Car('Audi');
// car.logName();

class Car {
    constructor(name) {
        console.log('Car constructor');
        this.name = name;
    }

    logName() {
        console.log('Car name is: ', this.name);
    }

    // static staticFunc() {
    //     console.log(`I'm static.`);
    // }
}

// let car = new Car('BMW');
// car.logName();
// console.log(car.logName() === Car.prototype.logName());
// Car.staticFunc();

class BMW extends Car {
    constructor(name) {
        super(name);

        console.log('BMW constructor');
    }

    logName() {
        // console.log('BMW model is: ', this.name);
        super.logName();
    }
}

let bmw = new BMW('x6');
bmw.logName();