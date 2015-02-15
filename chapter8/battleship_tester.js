// To use this tester file, you'll need to leave the view, model, controller
// objects in place, but comment out all the testing code except the parts
// you're using.  Remember you can use 
/* 
   code here 
*/
// to comment out large chunks of code.


// testing the view
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}

}; 
/*
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");
*/

// sharpen your pencil
/*
var ships = [{ locations: ["31", "41", "51"], hits: ["", "", ""] }, 
             { locations: ["14", "24", "34"], hits: ["", "hit", ""] }, 
             { locations: ["00", "01", "02"], hits: ["hit", "", ""] }];

var ship2 = ships[1]; 
var locations = ship2.locations; 
console.log("Location is " + locations[1]);

var ship3 = ships[2]; 
var hits = ship3.hits; 
if (hits[0] === "hit") {
  console.log("Ouch, hit on third ship at location one"); 
}

var ship1 = ships[0]; 
var hits = ship1.hits; 
    hits[2] = "hit";
*/


// testing the model








