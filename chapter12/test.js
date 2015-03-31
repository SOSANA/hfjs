/*
 * 
 * Hello object constructors!!!
 * 
 * Object constructors , or “constructors” for short, can create objects much more easily, and we can 
 * create objects that all adhere to the same design blueprint —meaning we can use constructors to 
 * ensure each object has the same properties and includes the same methods. Think of a constructor like 
 * a little factory that can create an endless number of similar objects.
 * 
*/ 

// Array objects
var emptyArray = new Array();

// JavaScript's built-in objects
var now = new Date();
var dataString = now.toString();
var theYear = now.getFullYear();
var theDayofWeek = now.getDay();
console.log(now);
console.log(dataString);
console.log(theYear);
console.log(theDayofWeek);



// altering an objects from a constructor
// a car is still a car, even if you change it later.
/*
function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    };     
    this.stop = function() {
        this.started = false;
    };    
    this.drive = function() {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }      
    };
}

var cadiParams = {make: "GM", 
                  model: "Cadillac", 
                  year: 1955, 
                  color: "tan", 
                  passengers: 5, 
                  convertible: false, 
                  mileage: 12892};

var cadi = new Car(cadiParams);
cadi.chrome = true;
delete cadi.convertible;

function cadiCar (obj) {
    if (obj instanceof Car) {
        return true;
    } else {
        return false;
    }    
}

console.log(cadiCar(cadi));
*/


// altering an object from a constructor
/*
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            return this.name + " says I am a big fella!";
        } else {
            return this.name + " says I'm just a lil fella!";
        }
    };
    this.trust = function(person) {
                    return (person === "Bob"); 
    };
}

var lulu = new Dog("Lulu", "Mixed", 15);
lulu.owner = "Sosana";
lulu.speak = lulu.bark();
//delete lulu.weight;

console.log("It's " + lulu.trust("Bob") + " " + lulu.name + " trusts " + lulu.owner);
console.log(lulu.name + " " + "weighs " + lulu.weight);
console.log(lulu.speak);
*/


// instanceof dogCatcher Exercise
/* 
function dogCatcher(obj) {
	if (obj instanceof Dog) {
        return true;
    } else {
        return false;
    }
}
function catCatcher(obj) {
	if (obj instanceof Cat) {
        return true;
    } else {
        return false;
    }
}
function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10); 
var whiskers = new Cat("Whiskers", "Mixed", 12); 
var cats = [meow, whiskers];

 
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}
var fido = {name: "Fido", breed: "Mixed", weight: 38};
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
};

for (var i = 0; i < cats.length; i++) {
    if (catCatcher(cats[i])) {
        console.log(cats[i].name + " is a cat!");
    }
};
*/


// Car and Dog constructors typeof Exercise 
// The typeof operator returns the type of its operand. If you pass it a string you’ll get back “string”, 
// if you pass it an object you’ll get back “object” and so on. You can pass it any type: a number, a 
// string, a boolean, or a more complex type like an object or function. But typeof can’t be more specific 
// and tell you the object is a dog or a car.
/*
function Car(params) {
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;

	this.start = function() {
		this.started = true;
	};

	this.stop = function() {
		this.started = false;
	};

	this.drive = function() {
		if (this.started) {
			console.log(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			console.log("Start the engine first.");
		}
	};

}

var cadiParams = {make: "GM", 
                  model: "Cadillac", 
                  year: 1955, 
                  color: "tan", 
                  passengers: 5, 
                  convertible: false, 
                  miles: 12892};
var cadi = new Car(cadiParams);

var chevyParams = {make: "Chevy", 
                   model: "Bel Air", 
                   year: 1957, 
                   color: "red", 
                   passengers: 2, 
                   convertible: false, 
                   miles: 1021};
var chevy = new Car(chevyParams);

var taxiParams= {make: "Webville Motors", 
                 model: "Taxi", 
                 year: 1955, 
                 color: "yellow", 
                 passengers: 4, 
                 convertible: false, 
                 miles: 281341};
var taxi = new Car(taxiParams);

var fiatParams= {make: "Webville Motors", 
                 model: "500", 
                 year: 1957, 
                 color: "Medium Blue", 
                 passengers: 2, 
                 convertible: false, 
                 miles: 88000};
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

var testParams= {make: "Webville Motors", 
                 model: "Test Car", 
                 year: 2014, 
                 color: "marine", 
                 passengers: 2, 
                 convertible: true, 
                 miles: 21};
var testCar = new Car("WebVille Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, testCar];
*/
/*
 * Commented out so we don't have to see all the alerts again!
 *
for(var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}
*/
/*
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

var limoParams = {make: "Webville Motors",
                  model: "limo", 
                  year: 1983, 
                  color: "black", 
                  passengers: 12, 
                  convertible: true, 
                  mileage: 21120};

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);
*/


// Refactoring the Car Object Constructor by rewiring the arguments as an object literal
/*
function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("start the engine first.");        
        }
    };
}

var chevyParams = {
    make: "Chevy", 
    model: "Bel Air", 
    year: 1957, 
    color: "red", 
    passengers: 2, 
    convertible: false, 
    mileage: 1021
};
var chevy = new Car(chevyParams);

var cadiParams = {
    make: "GM", 
    model: "Cadillac", 
    year: 1955, 
    color: "tan", 
    passengers: 5, 
    convertible: false, 
    mileage: 12892
};
var cadi = new Car(cadiParams);

var taxiParams = {
    make: "Webville Motors", 
    model: "Taxi", 
    year: 1955, 
    color: "yellow", 
    passengers: 4, 
    convertible: false, 
    mileage: 281341
};
var taxi = new Car(taxiParams);

var fiatParams = {
    make: "Fiat", 
    model: "500", 
    year: 1957, 
    color: "Medium Blue", 
    passengers: 2, 
    convertible: false, 
    mileage: 88000
};
var fiat = new Car(fiatParams);

var batCarParams = {
    make: "Lincoln", 
    model: "Batmobile", 
    year: 1955, 
    color: "black", 
    passengers: 2, 
    convertible: true, 
    mileage: 5000
};
var batCar = new Car(batCarParams);

var testCarParams = {
    make: "Webville Motors", 
    model: "Test Car", 
    year: 2014, 
    color: "marine", 
    passengers: 2, 
    convertible: true, 
    mileage: 21
};
var testCar = new Car(testCarParams);

var cars = [chevy, cadi, taxi, fiat, batCar, testCar];

for(var i = 0; i < cars.length; i++) {
    cars[i].drive();
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
}
*/

// Car Exercise
/*
function Car(make, model, year, color, passengers, convertible, mileage, started) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("start the engine first.");        
        }
    };
}

var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
var batCar = new Car("Lincoln", "Batmobile", 1955, "black", 2, true, 5000)
var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, batCar, testCar];

for(var i = 0; i < cars.length; i++) {
    cars[i].drive();
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
}
*/


// Coffee Exercise 
/*
function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function() {
        if (this.ounces === 8 ) {
            return "small";
        } else if ( this.ounces === 12 ) {
            return "medium";
        } else if (this.ounces === 16) {
            return "large";
        }
    };
    this.toString = function() {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString()); // You’ve ordered a medium House Blend coffee.

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString()); // You’ve ordered a large Dark Roast coffee.
*/

// Sharpen your pencil
/*
function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}
*/


// creating a dog object constructor
// Capital letters are common convention for identifying a constructor
/*
function Dog(name, breed, weight) {
    // we use the "this" keyword and not the variable like in most functions
    // the property names and parameter names don't have to be the same, but they often are by convention
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    // notice that constructor functions don't return anything
}
*/
