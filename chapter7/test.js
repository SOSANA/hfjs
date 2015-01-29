

// string methods and properties
// Split Method - The split method takes a character that acts as a delimiter, and breaks the string into 
// parts based on the delimiter.
var data = "name|phone|address";
//Split uses the delimiter to break the original string into pieces, which are returned in an array
var vals = data.split("|");
// Notice below we are passing two arguments to consol.log seperated by a comma. This way, The
// vals array doesn't get converted to a string before it's displayed in the console.
console.log("Split array is ", vals);

/*
// Substring Method - Give the substring method two indices, and it will extract and return the string contained within them.
// Here's the string we're going to call substring on.
var data = "name|phone|address";
//We'd like the string from index 5 and up to(but nto include) 10 returned.
var val = data.substring(5, 10);
// We get back a new string with the characters from index 5 to 10.
console.log("substring is " + val);
//omitting second index, substring will extract a string that starts at the first index and then 
//continues until the end of the original string.
val = data.substring(5);
console.log("Substring is now " + val);
*/

// indexOf Method takes a string as an argument and returns the index of the 
// first character of the first occurrence of that argument in the string.
/*
var phrase = "the cat in the hat";
var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);

index = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index);

index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index);

// charAt method
var input = "jimbo@gmail.com";
for(var i = 0; i < input.length; i++) {
 if (input.charAt(i) === "@") {
  console.log("There's an @ sign at index " + i);
  }
}
*/


// Brain Power
// This will compair presentableText to 0 and if it is than it will alert the string to lowercase
/*
var text = "YOU SHOULD NEVER SHOUT WHEN TYPING"; 
var presentableText = text.toLowerCase(); 
if (presentableText.length > 0) { alert(presentableText); }
*/


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