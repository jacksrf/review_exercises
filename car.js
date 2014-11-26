var Car = function(brand, model, color) {
	this.brand = brand;
	this.model = model;
	this.color = color;
	this.gear = "parked";
	this.stopped = true;
}

Car.drive = function() {
	this.gear = "drive";
	this.stopped = false;
	return tesla;
}

Car.accelerate = function() {
	if (this.gear = "parked") {
		return ("Switch to drive first!");
	}
	else {
		return ("Ford focus is accelerating.");
	}
}

Car.stop = function() {
	return ("Ford focus has stopped.");
	this.stopped = true;
}

Car.park = function() {
	if (this.stopped = false) {
		return("Stop the car first!");
	} else {
		return ("Ford focus is parked");
		this.gear = "Parked";
		}
	}

var tesla = new Car("Tesla","Model S","Black");
console.log(tesla);

console.log(Car.drive(tesla));
console.log(Car.accelerate(tesla));
console.log(Car.stop(tesla));
console.log(Car.park(tesla));