// To use this tester file, you'll need to leave the view, model, controller
// objects in place, but comment out all the testing code except the parts
// you're using.  Remember you can use 
/* 
   code here 
*/
// to comment out large chunks of code.


// testing the view
// start of view
// Notice we're defining an object and assigning it to the variable view
var view = {
  
  // these methods take a string and message and displays it in the  messsage display area  
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  // Remember the location is created from the row and column and matches the id of a <td> element
  displayHit: function(location) {
    // We're using the id we created from the player's guess to get the correct element to update
    var cell = document.getElementById(location);
    // We then set the class of that element to "hit". This will immediately add a 
    // ship image to the <td> element
    cell.setAttribute("class", "hit");
  },
  
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    //We do the same thing in displayMiss, only we set the class to "miss" which adds a miss image to the element
    cell.setAttribute("class", "miss");
  }
 
}; 
// end of the view
/*
// view test drive
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
// start of the model, holds game state, fire method provides the game logic for determining if a hit or miss has occurred
var model = {
  // the size of the grid board for the board
  boardSize: 7,
  // the number of ships in the game
  numShips: 3,
  // how many ships have been sunk
  shipsSunk: 0, 
  // the number of locations in each ship
  shipLength: 3,
  // the ship locations and hits
  ships: [
    // removed the hardcoded ship locations
		/* { locations: ["06", "16", "26"], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] } */
    
    { locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
    
	],
  // a method to fire on a ship and figure out if the shot is a hit or miss
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
  //notifies the view when we get a hit or a miss in the model
  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;      
      }
    }
    return true; 
  },
  
   generateShipLocations: function() {
    var locations;
    // for each ship we want to generate locations for
		for (var i = 0; i < this.numShips; i++) {
      // we're using a do while loop here
		  do {
        // we generate a new set of locations
			  locations = this.generateShip();
        // and check to see if those locations overlap with any existing ships on the board. If they do,
        // then we need to try again. So keep generating new locations until there's no collision
			  } while (this.collision(locations));
         // once we have locations that work, we assign the locations to the ships locations property 
        // in the model.ships array
		  	this.ships[i].locations = locations;
		  }
		  console.log("Ships array: ");
		  console.log(this.ships);
  },

  generateShip: function() {
   // we use Math.random to generate a number between 0 and 1, and multiply the result by 2, to get a number 
   // between 0 and 2 (not including 2). We then turn that into a 0 or a 1 using Math.floor
	 var direction = Math.floor(Math.random() * 2);
   var row;
   var col;
   if (direction === 1) {
     // if the direction is a 1, that means we'll create a horizontal ship
     // generate a starting location for a ship on the board
     row = Math.floor(Math.random() * this.boardSize);
     col = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
   } else {
      // if direction is 0, that means we create a vertical ship
      // generate a starting lcoation for a vertical ship
      row = Math.random(Math.random() * (this.boardSize - (this.shipLength + 1)));
      col = Math.random(Math.random() * this.boardSize);
    }
   // for the new ship locations, we'll start with an empty array and add the location one by one
   var newShipLocations = [];
   // loop for the number of locations in a ship 
   for (var i = 0; i < this.shipLength; i++) {
     if (direction === 1) {
       // add location to array for new horizontal ship and add a new location to the newShipLocations array each
       // time through the loop. Again we need slightly different code to generate a location depending on the direction 
       // of the ship.
       newShipLocations.push(row + "" + (col + i));
     } else {
       // add location to array for new vertical ship
       newShipLocations.push((row + i) + "" + col);
     }
   }
   // once we're generated all the locations, we return the array 
   return newShipLocations;
 },
   
  collision: function(locations) {
    // for each ship already on the board
		for (var i = 0; i < this.numShips; i++) {
      var ship = model.ships[i];
      // check to see if any of the lcoations in the new ships locations array are in an existing
      // ship's locations array
      for (var j = 0; j < locations.length; j++) {
        // using indexOf to check if the location already exists in a ship so if the index is greater 
        // than or equal to 0, we know it matched an existing location, so we return true (meaning we found a
        // collision)
        if (ship.locations.indexOf(locations[j]) >= 0) {
          // this stops the iteration of both loops immediately, exiting the function and returning true
          return true;
        }
      }
    }
    // if we get here and haven't returned, then we never found a match for any of the locations we were checking,
    // so we return false (there was no collision)
    return false;
  }
};
// End of model
  
/*
// model test drive
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
*/


// helper function to parse a guess from the user ex from letter a to 0 in array
// the guess is passed into the guess parameter
function parseGuess(guess) {
  // an array loaded with each letter that could be part of a valid guess
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  // we check for null and to make sure the length is 2 characters
  if (guess === null || guess.length !== 2) {
    // if not we alert the player
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    // grab the first character of the guess 
    firstChar = guess.charAt(0);
    // using indexOf, we get back a number between zero and six that corresponds to the letter
    var row = alphabet.indexOf(firstChar);
    // we've added code to grab the second character in the string, which represents the column
    var column = guess.charAt(1);
    // we're checking to see if either of the row or column is not a number using the isNAN function
    if (isNaN(row) || isNaN(column)) {
        alert("Oops, that isn't on the board.");
      //were making sure numbers are between zero and six and asking the model to tell us how big the board is
      //and using that board for the comparision
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
        alert("Oops, that's off the board!");
    } else {
      // using type version (row is a number and column is a string) to concatenate which ends up a string
        return row + column;
    }
  }
  // if we get here, there was a failed check along the way so return null
  return null;
}
// parse guess test drive
/*
console.log(parseGuess("A0")); 
console.log(parseGuess("B6")); 
console.log(parseGuess("G3")); 
console.log(parseGuess("H0")); 
console.log(parseGuess("A7"));
*/

// start of the controller, at high level, the controller glues everything together by getting a guess, 
// processing the guess, and getting it to the model. Also keeps track of some of the admin details like
// the current number of guesses and the players progress in the game. To do all this the controller relies 
// on the model to keep the state of the game and on view to display the game.
// Here are the responsiblities of the controller; 
// Get and process the player’s guess (like “A0” or “B1”),
// Keep track of the number of guesses, 
// Ask the model to update itself based on the latest guess, 
// Determine when the game is over (that is, when all ships have been sunk).
//start of the controller
var controller = {
  guesses: 0,
  
  processGuess: function(guess) {
    var location = parseGuess(guess);
    if (location) {
      // if the player entered a valid guess we increase the number of guesses by one
      this.guesses++;
      // then we pass the row and column in the form of a string to the model's fire method. Remember, the fire 
      // mehod returns true if the ship is hit
      var hit = model.fire(location);
      // if the guess was a hit, and the number of ships that are sunk is equal to the number of ships in th game,
      // then show the player a message that they've sunk all the ships
      if (hit && model.shipsSunk === model.numShips) {
        // we'll show the player the total number of guess they took to sink the ship. The guess property is a property of 
        // "this" object, the controller
        view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
      }
    }
  }
};
/*
controller.processGuess("A0"); // miss

controller.processGuess("A6"); // hit
controller.processGuess("B6"); // hit
controller.processGuess("C6"); // hit

controller.processGuess("C4"); // hit
controller.processGuess("D4"); // hit
controller.processGuess("E4"); // hit

controller.processGuess("B0"); // hit
controller.processGuess("B1"); // hit
controller.processGuess("B2"); // hit
*/

// event handlers
// this function will be called whenever you click the Fire! button
function handleFireButton() {
  // first we get a reference to the input form element using the input element's id, "guessInput"
  var guessInput = document.getElementById("guessInput");
  // then we get the guess from the input element. The guess is stored in the value property of the input element
  var guess = guessInput.value.toUpperCase();
  // We're passing the player's gues sto the controller
  controller.processGuess(guess);
  //This resets the form input element to be the empty string. That way you don't have to explicity select the text and 
  //delete it before entering the next guess, which would be annoying
  guessInput.value = "";
}

// here's the key press handler. It's called whenever you press a key in the form input in the page
// the browswer pases an (e) event object to the handler. this object has info about which key was pressed
function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  // in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;
  // if you press the RETURN key, the event's keyCode property will be set to 13, 
  if (e.keyCode === 13) {
    // if that's the case then we want to cause the Fire! button to act like it was clicked. We 
    // can do that by calling the fireButton's click method (basically tricking it into thinking it was clicked)
    fireButton.click();
    // we return false so the form doesn't do anything else (like try to submit itself)
    return false;
  }
}

// like we learned in chapter 6, we want the browser to run init when the page is fully loaded
// init - called when the page has completed loading
window.onload = init;

// using the fire button to initalize the guess
function init() {
  // first, we get a reference to the Fire! button using the button's id
  var fireButton = document.getElementById("fireButton");
  // then we can add a click handler function named handleFireButton to the button
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  // Add a new handler. This one handles key press events from the HTML input field.
  guessInput.onkeypress = handleKeyPress;
  // calling generateShipLocations from the init function so it happens riht when you load the game vefore you 
  // start playing. That way all the ships have locations read to go when you start playing
  model.generateShipLocations();
}





