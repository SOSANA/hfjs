

// Brain Power
// This will compair presentableText to 0 and if it is than it will alert the string to lowercase
var text = "YOU SHOULD NEVER SHOUT WHEN TYPING"; 
var presentableText = text.toLowerCase(); 
if (presentableText.length > 0) { alert(presentableText); }

// Sharpen your pencil - lie detector test
// Five Falseys include undefined, null, 0, Empty string, NaN
// Everything else is considered Truthy
// 
/*
function lieDetectorTest() {
	var lies = 0;
  // This is truthy, even empty objects are truthy
	var stolenDiamond = { };
	if (stolenDiamond) {
    	console.log("You stole the diamond");
		lies++;
	}
  // This is falsey, the value in keysInPocket property is set to null
	var car = {
    	keysInPocket: null
	};
	if (car.keysInPocket) {
    	console.log("Uh oh, guess you stole the car!");
		lies++;
	}
  // This is falsey, emptyGasTank property is undefined
	if (car.emptyGasTank) {
    	console.log("You drove the car after you stole it!");
		lies++;
	}
  // This is truthy, an empty array
	var foundYouAtTheCrimeScene = [ ];
	if (foundYouAtTheCrimeScene) {
    	console.log("A sure sign of guilt");
		lies++;
	}
  // This is falsey, There is no other item in foundYouAtTheCrimeScene array besides 0
	if (foundYouAtTheCrimeScene[0]) {
    	console.log("Caught with a stolen item!");
		lies++;
	}
  //This is truthy, as any non-empty string is truthy, even if it just as one space
	var yourName = " ";
	if (yourName) {
    	console.log("Guess you lied about your name");
		lies++;
	}
	return lies;
}
var numberOfLies = lieDetectorTest();
// This shows the total nuumber of lies which is 3 so the per is guilty!
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
	console.log("Guilty as charged");
}

console.log(lies);
*/



// Sharpen your pencil - Earl’s Autos parking lot.
/*
function findCarInLot(car) {
  for (var i = 0; i < lot.length; i++) {
    if (car === lot[i]) {
      return i;
    }
  }
  return -1;
}

var chevy = {
  make: "Chevy",
  model: "Bel Air"
};
var taxi = {
  make: "Webville Motors",
  model: "Taxi"
};
var fiat1 = {
  make: "Fiat",
  model: "500"
};
var fiat2 = {
  make: "Chevy",
  model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2]; 

var loc1 = findCarInLot(fiat2);  // 3
var loc2 = findCarInLot(taxi);  // 1
var loc3 = findCarInLot(chevy);  // 0
var loc4 = findCarInLot(fiat1); // 2

console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);
*/

//Sharpen Your Pencil - test that conversion
/*
Infinity - "1" // Infinity
2 + "1 1" // "21 1"
99 +101 // 200
"1" - "1" // 0
console.log("Result: " + 10/2) // Result: 5
3 + " bananas " + 2 + " apples" // "3 bananas 2 apples"
*/

// showing the difference between == comparision that evaluates a string and a number
// == will convert a number to a string as shown below
/*
if (99 == "99") {
  console.log("A number equals a string!");
} else {
  console.log("No way a number equals a string!");
}
*/


// lab exercise typeof operator, built in JS
/*
var subject = "Just a string";
var probe = typeof subject;
console.log(probe);

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = []; 
var test6;
var test7 = {"abcdef": 123};
var test8 = {"abcdef": 123};
function test9() {return "abcdef"};
var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
*/