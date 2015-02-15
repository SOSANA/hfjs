
// start of the model, holds game state
var model = {
  
  // the size of the grid board for the board
  boardSize: 7,
  // the number of ships in the game
  numShips: 3,
  // the number of locations in each ship
  shipLength: 3,
  // how many ships have been sunk
  shipsSunk: 0, 
  // the ship locations and hits
  ships: [
		{ locations: ["06", "16", "26"], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] }
	],
  
  // a method to fire on a ship and figure out if the shot is a hit or miss
  fire: function() {
  
  } 
}
// End of model

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





