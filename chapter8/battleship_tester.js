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
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	
	ships: [
		{ locations: ["06", "16", "26"], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] }
	],

	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");

				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++)  {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
	    return true;
	}
 };

model.fire("53"); // miss

model.fire("06"); // hit
model.fire("16"); // hit
model.fire("26"); // hit

model.fire("34"); // hit
model.fire("24"); // hit
model.fire("44"); // hit

model.fire("12"); // hit
model.fire("11"); // hit
model.fire("10"); // hit









