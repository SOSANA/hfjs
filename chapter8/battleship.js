
//Notice we're defining an object and assigning it to the variable view
var view = {
  
  //these methods take a string and message and displays it in the  messsage display area  
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  //Remember the location is created from the row and column and matches the id of a <td> element
  displayHit: function(location) {
    //We're using the id we created from the player's guess to get the correct element to update
    var cell = document.getElementById(location);
    //We then set the class of that element to "hit". This will immediately add a 
    //ship image to the <td> element
    cell.setAttribute("class", "hit");
  },
  
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    //We do the same thing in displayMiss, only we set the class to "miss" which adds a miss image to the element
    cell.setAttribute("class", "miss");
  },
 
};

view.displayMiss("00"); //A0
view.displayHit("34"); //D4
view.displayMiss("55"); //F5
view.displayHit("12"); //B2
view.displayMiss("25"); //C5
view.displayHit("26"); //C6
view.displayMessage("Tap tap, is this thing on?");