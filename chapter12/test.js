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

// Exercise 
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
