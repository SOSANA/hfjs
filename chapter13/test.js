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
 * Objects that can inherit properties and behavior from other objects. More 
 * specifically, JavaScript uses what is known as prototypal inheritance , and the object you’re inheriting 
 * behavior from is called the prototype . The whole point of this scheme is to inherit and reuse existing 
 * properties (including methods), while extending those properties in your brand new object. When an object 
 * inherits from another, it gains access to all its methods and properties.
 * 
*/

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";

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

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30); 
var spot = new Dog("Spot", "Chihuahua", 10);

fido.bark(); 
fido.run(); 
fido.wag();

fluffy.bark(); 
fluffy.run(); 
fluffy.wag();

spot.bark(); 
spot.run(); 
spot.wag();