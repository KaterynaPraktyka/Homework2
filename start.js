let Car = require('./Car');
let Truck = require('./Truck');

let BMW = new Car("X6", 2018, 400);
BMW.transportPeople();
BMW.displayInfo();
Car.Beep();

let Reno = new Truck("Q10", 2008, 180);
Reno.transportContainer();
Reno.displayInfo();
