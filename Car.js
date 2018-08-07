let Vehicle = require('./Vehicle.js');

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    static Beep() {
        console.log("bee...")
    }

    transportPeople() {
        console.log('I am starting transporting passengers');
    }

    displayInfo() {
        console.log(` This is Car
        Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type:${this.type};`);
    }
}

module.exports = Car;