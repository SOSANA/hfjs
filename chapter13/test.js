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
 * Start thinking in terms of a chain of prototypes. Rather than having an instance that inherits properties 
 * from just one prototype, there might be a chain of one or more prototypes your instance can inherit from.
 * 
*/

// Exercise forwards and backwards.
String.prototype.palindrome = function () {
    
    // first we get the length of the string
    var len = this.length-1;
    // then we iterate over each character in the string, and test to see if the character at i is the the same
    // as the character at len-i (ex: the character at the other end)
    for (var i = 0; i <= len; i++) {
        if (this.charAt(i) != this.charAt(len-i)) {
            // if they are not equal we return false because we don't have a palindrom
            return false;
        }
        if (i === (len-i)) {
            // if we get to where i is in the middle of the string, or we get to the end of the loop, we return 
            // true because we've got a palindrome
            return true;
        }
    }
    // if we get to where i is in the middle of the string, or we get to the end of the loop, we return 
    // true because we've got a palindrome
    return true;
}

// Advanced way
// Here, we first split the string into an array of letters, with each letter being one item in the array. We
// then reverse the array and join all the letters back up into a string. If the original string's value equals
// the new string, we've got a palindrome.
// ** NOTE we have to use the valueOf here, because "this" is an object, not a string primitive like r, so if we 
// don't, we'd be comparing a string to n object, and they wouldn't be equal even if "this" is a palindrome.
String.prototype.palindromeAdv = function() {
    var r = this.split("").reverse().join("");
    return (r === this.valueOf());
}

var phrases = ["dad",
               "mom",
               "wow",
               "Not a palindrome"];

for (var i = 0; i < phrases.length; i++) {
    var phrase = phrases[i];
    if (phrase.palindromeAdv()) {
        console.log("'" + phrase +"' is a palindrome");
    } else {
        console.log("'" + phrase + "' is NOT a palindrome");
    }
}


/*
// Overriding built-in behavior You already know that by adding methods to a prototype, you can add new 
// functionality to all instances of that prototype. This applies not only to your own objects, but also to 
// built-in objects.(not okay to override are constructor, hasOwnProperty, isPrototypeOf, propertyIsEnumerable, 
// okay to override are toString, toLocaleString, valueOf) refer to p588 for refresher 
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

// So we can override the toString method and write one that creates a string specifically for Robot objects
Robot.prototype.toString = function() {
    return this.name + " Robot belonging to " + this.owner;
}
var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());
// the toy object will get converted to a string using toString before it's concatenated. If toy has overridden
// toSting, it will use that method.
console.log("Robot is: " + toy);

// Let’s say we want to extend the String prototype with a method, cliche, that returns true if the string 
// contains a known cliché. Here we are adding a method, cliche, to the string prototype.
String.prototype.cliche = function() {
    // we define offending phrases to look for
    var cliche = ["lock and load", "touch base", "open the kimono"];
    
    for (var i = 0; i < cliche.length; i++) {
        // then we use the string's indexOf function to see if the string matches any of the cilches. if it does
        // we imediately return true. Note that "this" is the string on which we call the method cliche.
        var index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

// testing cliche with some sentences, including a couple that use cliches.
var sentences = ["I'll send my car around to pick you up.",
                 "Let's touch base in the morning and see where we are", 
                 "We don't want to open the kimono, we just want to inform them."];

for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i];
    // each sentence is a string, so we can call its cliche method
    // notice we are not creating a string useing the string constructor and new. Javascript is converting each
    // string to a Strin object behind the scenes for us, when we call the cliche method.
    if (phrase.cliche()) {
        // if true is returned, we know we have a cliche in the string
        console.log("CLICHE ALERT: " + phrase);
    }
}
*/


// ShowDog Exercise utilizing "prototype chain", inheritance from other prototypes and chaining them together
/*
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";
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
Dog.prototype.sit = function() { 
	if (this.sitting) {
		console.log(this.name + " is already sitting"); 
	} else {
		this.sitting = true;
		console.log(this.name + " is now sitting"); 
	}
};

// creating our ShowDog constructor
function ShowDog(name, breed, weight, handler) {
    // Using Dog.call to call Dog and reuse the Dog constructor's to process the name, breed, 
    // and weight.call is a builtin method that you can use on any function (and remember Dog
    // is a function). Dog.call invokes the Dog function and passes arguments for the Dog function.
	Dog.call(this, name, breed, weight);
     
    // old way, In effort to maintain the idea of eliminating duplicate code 
    // We use the acronym: DRY = “Don’t Repeat Yourself”.
    //this.name = name;
	//this.breed = breed;
	//this.weight = weight; 
   
    this.handler = handler;
}

// show dog prototype "extends" the dog prototype. It inherits properties from the dog prototype
// and extends it with new ones
// creating ShowDog prototype to be instance of Dog prototype
ShowDog.prototype = new Dog();
// here we are explicityly setting its constructor property to ShowDOg constructor
// ***** Remember this is best practice as it will show proper prototype its inheriting from for 
// ***** instanceof
ShowDog.prototype.constructor = ShowDog; 
// adding new property to show all dogs are in Webville league
ShowDog.prototype.league = "Webville";

// Here are all the mehtods we need for show dogs
ShowDog.prototype.stack = function() {
    console.log("Stack");
};

ShowDog.prototype.bait = function() {
    console.log("Bait");
};

ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};

ShowDog.prototype.groom = function() {
    console.log("Goom");
};

var fido = new Dog("Fido", "Mixed", 38);
// using this to test if Fido is instance of Dog or ShowDog
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}
var fluffy = new Dog("Fluffy", "Poodle", 30); 
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
	console.log(this.name + " says WOOF!");
};
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

// creating our new show dog scotty
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
// using this to test if Scotty is instance of Dog or ShowDog
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}

fido.bark(); 
fluffy.bark(); 
spot.bark(); 

// calling scotty stack and bark methods
scotty.stack();
scotty.bark();

console.log(scotty.league);
console.log(scotty.species);

// Testing to see where fido and scotty inherit thier prototype from
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);
*/


// Teaching a dog a new tricks (dynamic prototypes)
/*
 * We’re glad to see Barnaby can now sit. But it turns out that now all our dogs can sit, because once you 
 * add a method to a prototype, any objects that inherit from that prototype can make use of that method:
 * This works for properties too, of course.
*/
/*
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
// adding new method run to Dog prototype
Dog.prototype.run = function() {
	console.log("Run!"); 
};
// adding new method wag to Dog prototype
Dog.prototype.wag = function() {
	console.log("Wag!"); 
};
// adding new method sit to Dog prototype
Dog.prototype.sit = function() { 
	if (this.sitting) {
		console.log(this.name + " is already sitting"); 
	} else {
		this.sitting = true;
		console.log(this.name + " is now sitting"); 
	}
};

// creating new instances of the Dog prototype
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30); 
var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

// creating a new method to only the spot instance prototype
spot.bark = function() {
	console.log(this.name + " says WOOF!");
};

// calling fido
fido.bark(); 
fido.run(); 
fido.wag();

// calling fluffy
fluffy.bark(); 
fluffy.run(); 
fluffy.wag();

// calling spot
spot.bark(); 
spot.run(); 
spot.wag();

// calling barnaby
barnaby.sit();
barnaby.sit();

// calling spot
spot.sit();
spot.sit();
// using the hasOwnProperty method to determine if its using a property that's in the instance or in 
// the prototype. The method will return true if its from the instance or false if its from the prototype
console.log(spot.hasOwnProperty("species"));
console.log(spot.hasOwnProperty("species"));

// we first check to see if spot has his own sitting property we get false
spot.hasOwnProperty("sitting");
// Then we set spot sitting to  true, addin this property to the spot instance
spot.sitting = true;
// this call to hasOwnProperty returns true, because spot now has his own sitting property
console.log(spot.hasOwnProperty("sitting"));
// but this call to hasOwnProperty returns false, becuase that means the sitting property that fido uses is 
// defined only in the prototype, and inherited by fido
console.log(fido.hasOwnProperty("sitting"));
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