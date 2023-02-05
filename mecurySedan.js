//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)



class car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
//unsure what super keyword does - be sure to review and study
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers) {
            this.passengers = num;
            return this.passengers;
            
        }
        else {
            console.log(this.model + " " + this.make + "not enough seats to take all passengers");
        }
        
    }
      

    start() {
    if (this.fuel > 0) {
        console.log("the car has started");
        return this.started = true }
        else {
            console.log("no fuel");
            return this.started = false;
        }
    }
    
    scheduleService() {
            if (this.mileage > 30000) {            
                this.scheduleService = true
                return this.scheduleService;                       
            }

        }

    }


let A28 = new car("mercury", "Sedan", "1965", "blue", "25000")
 A28.loadPassenger()
 A28.start()
 A28.scheduleService()

 console.log(A28)