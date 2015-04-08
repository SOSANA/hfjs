/*
 * Extra strength objects
 * 
 * JavaScript doesn’t have a classical object-oriented model, where you create objects from classes. 
 * In fact, JavaScript doesn’t have classes at all . In JavaScript, objects inherit behavior from 
 * other objects , which we call prototypal inheritance , or inheritance based on prototypes. Note 
 * This may change in the future: the next version of JavaScript may add classes.  
 * 
 * Typically when we talk about an object’s “behavior” we’re referring to the set of methods it supports.
 * 
 * Javascript Prototypes
 * Objects that can inherit properties and behavior (method's) from other objects. More 
 * specifically, JavaScript uses what is known as prototypal inheritance , and the object you’re inheriting 
 * behavior from is called the prototype. The whole point of this scheme is to inherit and reuse existing 
 * properties (including methods), while extending those properties in your brand new object. When an object 
 * inherits from another, it gains access to all its methods and properties. Adding new methods or properties 
 * to a prototype allows all objects to inherit the new methods or properties. All object instances inherit
 * from the Prototype.
 * 
*/


// Robot Exercise game
/*
function Game() {
	this.level = 0;
}

Game.prototype.play = function() {
	// player plays game here
	this.level++;
	console.log("Welcome to level " + this.level);
	this.unlock();
}
// adding a new deployLaser method when scores reaches 42
Game.prototype.unlock = function() {
    if (this.level === 42) {
		Robot.prototype.deployLaser = function () {
			console.log(this.name +  " is blasting you with laser beams.");
		}
	}	
}

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

var game = new Game();
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

while (game.level < 42) {
     game.play();
}

robby.deployLaser();
rosie.deployLaser();
*/


// Teaching a dog a new trick (dynamic prototypes)
/*
 * We’re glad to see Barnaby can now sit. But it turns out that now all our dogs can sit, because once you 
 * add a method to a prototype, any objects that inherit from that prototype can make use of that method:
 * This works for properties too, of course.
*/

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";
// adding new property prototype sitting
Dog.prototype.sitting = false;

Dog.prototype.bark = function() { 
	if (this.weight > 25) {
		console.log(this.name + " says Woof!"); 
	} else {
		console.log(this.name + " says Yip!"); 
	}
};

Dog.prototype.run = function() {
	console.log("Run!"); 
};
Dog.prototype.wag = function() {
	console.log("Wag!"); 
};
// adding new method for sit
Dog.prototype.sit = function() { 
	if (this.sitting) {
		console.log(this.name + " is already sitting"); 
	} else {
		this.sitting = true;
		console.log(this.name + " is now sitting"); 
	}
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30); 
var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

spot.bark = function() {
	console.log(this.name + " says WOOF!");
};

fido.bark(); 
fido.run(); 
fido.wag();

fluffy.bark(); 
fluffy.run(); 
fluffy.wag();

spot.bark(); 
spot.run(); 
spot.wag();

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();


/*
// Robots Exercise
// Robot Object Constructor
function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

// Robot Prototype
Robot.prototype.maker = "ObjectsRus";

Robot.prototype.speak = function speak() {
    alert("Warning warning!!");
};

Robot.prototype.makeCoffee = function makeCoffee() {
    alert("Making coffee");
};
    
Robot.prototype.blinkLights = function blinkLights() {
    alert("Blink blink!");
};

// Creating new Robots from our Robot Constructor that inherits from Robot Prototype
var robby = new Robot("Robby", 1956, "Dr.Morbius"); 
var rosie =  new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function makeCoffee() {
    alert("Fetching a coffee from Starbucks.");
};
    
rosie.cleanHouse = function cleanHouse() {
    alert("Cleaning! Spic and Span soon...");
};
    
console.log(robby.name + " was made by " + robby.maker + 
            " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + 
            " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
*/


/*
 * When we are calling the bark method in the prototype, you might think that "this" is now set to the prototype 
 * object. Well, that’s not how it works. When you call an object’s method, "this" is set to the object whose method 
 * was called. If the method is not found in that object, and is found in the prototype, that doesn’t change the 
 * value of "this". "this" always refers to the original object—that is, the object whose method was called—even if 
 * the method is in the prototype. So, if we find the bark method in the prototype, then we call the method, with 
 * this set to the original dog object, giving us the result we want, like “Fluffy says Woof!”.
*/
/*
// Test Drive the prototype with some dogs & add custom bark method
// Dog Object Constructor
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

// Dog Prototype
// adding one property 
Dog.prototype.species = "Canine";
// adding three methods to the prototype
Dog.prototype.bark = function() { 
	if (this.weight > 25) {
		console.log(this.name + " says Woof!"); 
	} else {
		console.log(this.name + " says Yip!"); 
	}
};
Dog.prototype.run = function() {
	console.log("Run!"); 
};
Dog.prototype.wag = function() {
	console.log("Wag!"); 
};

// We create dogs like normal
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30); 
var spot = new Dog("Spot", "Chihuahua", 10);
// custom bark method
spot.bark = function() { 
	console.log(this.name + " says WOOF!");
};

fido.bark(); 
fido.run(); 
fido.wag();

fluffy.bark(); 
fluffy.run(); 
fluffy.wag();

spot.bark(); 
spot.run(); 
spot.wag();
*/