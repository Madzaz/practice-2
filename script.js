class Vehicle {
  type;
  color;
  speed;
  weight;

  static VEHICLE_TYPES = ["car", "vessel", "aircraft"];

  constructor(type, color, speed, weight) {
    if (!color || !type || !speed || !weight) {
      throw new Error("Not all required information provided");
    }

    if (!Vehicle.VEHICLE_TYPES.includes(type)) {
      throw new Error("Vehicle type must be car, vessel, or aircraft");
    }

    this.type = type;
    this.color = color;
    this.speed = speed;
    this.weight = weight;
  }
}

class Car extends Vehicle {
  brand;
  model;
  numberOfDoors;
  fuel;

  static NUMBER_OF_DOORS = [3, 5];
  static FUEL_TYPES = ["gasoline", "diesel", "cng"];

  constructor(brand, model, numberOfDoors, fuel, color, speed, weight) {
    super("car", color, speed, weight);
    if (!Car.NUMBER_OF_DOORS.includes(numberOfDoors)) {
      throw new Error("Number of doors must be 3 or 5");
    }

    if (!Car.FUEL_TYPES.includes(fuel)) {
      throw new Error("Fuel type must be gasoline, diesel, or cng");
    }

    this.numberOfDoors = numberOfDoors;
    this.fuel = fuel;
    this.brand = brand;
    this.model = model;
  }
}

class Vessel extends Vehicle {
  vesselType;

  static VESSEL_TYPES = ["yacht", "sailboat", "frigate"];

  constructor(vesselType, color, speed, weight) {
    super("vessel", color, speed, weight);
    if (!Vessel.VESSEL_TYPES.includes(vesselType)) {
      throw new Error("Vessel type must be yacht, sailboat, or frigate");
    }

    this.vesselType = vesselType;
  }
}

class Aircraft extends Vehicle {
  aircraftType;
  unmanned;

  static AIRCRAFT_TYPES = ["airplane", "helicopter"];
  static UNMANNED = ["true", "false"];

  constructor(aircraftType, unmanned, color, speed, weight) {
    super("aircraft", color, speed, weight);

    if (!Aircraft.AIRCRAFT_TYPES.includes(aircraftType)) {
      throw new Error("Aircraft type must be airplane or helicopter");
    }

    if (!Aircraft.UNMANNED.includes(unmanned)) {
      throw new Error("Unmanned property must be true or false");
    }

    this.aircraftType = aircraftType;
    this.unmanned = unmanned;
  }
}

let car = new Car("audi", "a4", 3, "gasoline", "blue", "200km/h", "2000kg");

let vessel = new Vessel("yacht", "black", "50km/h", "90t");

let aircraft = new Aircraft("airplane", "false", "black", "1.470 km/h", "9.5t");

console.log(car);
console.log(vessel);
console.log(aircraft);
