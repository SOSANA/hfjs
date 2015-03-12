/* 
   Functions in javaScript are values, values that can be assigned to variables. Values such as 
   numbers, booleans, strings, and objects. We can do all sorts of things with those values 
   such as pass them to functions, return them from functions or even store them in objects or 
   arrays. When we design functions, a good rule of thumb is to have them do only one thing, 
   but do it really well
   First class values (refered to by computer scientists) are assign the value to a variable 
   (or store it in a data structure like an array or object), pass the value to a function, return 
   the value from a function. Bellow we are assigning functions to variables, passing functions to 
   functions, and returning functions from functions.
*/

// All passengers stored in an array. Each passenger is represented by an object with 
// a name, paid and ticket property
var passengers = [ { name: "Jane Doloop ", paid: true, ticket: "coach" },
                   { name: "Dr. Evel ", paid: true, ticket: "firstclass" },
                   { name: "Sue Property ", paid: false, ticket: "firstclass" },
                   { name: "John funcall ", paid: true, ticket: "coach" },
                   { name: "Joaquin Sosana ", paid: true, ticket: "firstclass" },
                   { name: "Benico Sosana ", paid: true, ticket: "firstclass" },
                   { name: "Isabella Sosana ", paid: true, ticket: "firstclass" } ];

// function has two parameters, the first is an array of passengers and second is
// a function that knows how to look for some condition in the passengers.
function processPassengers(passengers, testFunction) {
  // we iterate through all the passengers, one at time
  for (i = 0; i < passengers.length; i++) {
    // and then we call the function on each passenger
    if (testFunction(passengers[i])) {
      // if the result of the function is true, then we return false. in other words,
      // if the passenger failed the test (eg they haven't paid or they are on the no-fly 
      // list), then we don't want the plan to take off!
      return false;
    }
  }
  // otherwise, if we get here then all passengers passed the test and we return true
  return true;
}
   
// here's the function to check to see if a passenger is on the no-fly list. Our no-fly
// list is simple: everyone except Dr.Evel can fly. We reurn true if the passenger is Dr.Evel; 
// otherwise, we return false (that is, the passenger is not on the no-fly list)
function checkNoFlyList(passenger) {
   return (passenger.name === "Dr. Evel");
}
// this function to checks to see if a passenger has paid. All we do is check the paid 
// property of the passenger. If they have not paid, then we return true.
function checkNotPaid(passenger) {
  return (!passenger.paid);
}
// we're passing a function to a function
// We just use the name of the function as the argument
// and also passing the checkNoFlyList function. So process Passengers will check each passenger 
// to see if they are on the no-fly list
var allCanFly = processPassengers(passengers, checkNoFlyList);
  if (!allCanFly) {
    // if any of the passengers are on the no-fly list, we get back a false, and a msg in console
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
  }
    // we're passing the checkNotPaid function in as an argument. processPassengers will check each 
    // passenger to see if they've paid
    var allPaid = processPassengers(passengers, checkNotPaid);
    if (!allPaid) {
    // if any of the passengers haven't paid, we'll get back false, and a msg in the console
    console.log("The plane can't take off: not everyone has paid.");
  }

// my solution to exercise which is same results as book solution
/*
function printPassenger(passengers) {
  var passengersName = passengers.name;
  var passengersPaid = passengers.paid;
  if (passengersPaid === true) {
    console.log (passengersName + "has paid");
  } else {
    console.log (passengersName + "has not paid");
  }
}
  
processPassengers(passengers, printPassenger);
*/

// books solution to exercise
function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid) {
    message = message + " has paid";
  } else {
    message = message + "has not paid";
  }
  console.log(message);
  // this return value doesn't matter that much because we're ignoring the result from  processPassengers
  // in this case
  return false;
}
// passing a function to a function, which is function printPassenger
processPassengers(passengers, printPassenger);


// get drink order and return a function
// It's going to return a function that knows how to take a drink order
function createDrinkOrder(passenger) {
  // creating a variable to hold the function we want to return
  var orderFunction;
  // we execute the conditional code to check the passenger's ticket type only once
  if (passenger.ticket === "firstclass") {
    // if the passenger is first call, we create a function that knows how to take a first class order
    orderFunction = function() {
      // if the pasenger's ticket is a first class ticket then we issue an alert to ask for cocktail or a wine
      alert("Would you like a cocktail or wine?");
    };
  } else {
      // otherwise create a function to take a coach class order
      orderFunction = function() {
        // if they have a coach ticket, then ask if they want a cola or water
        alert("Your choice is cola or water.");
      };
  }
  // return the function
  return orderFunction;
}

// returning a function from a function 
function serveCustomer(passenger) {
  // createDrinkOrder now returns a function, which we store in the getDrinkOrderFunction
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  getDrinkOrderFunction();
  // get dinner order
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  // show movie
  getDrinkOrderFunction();
  // pick up trash
}
// function to take some orders
function servePassengers(passengers) {
  // iterating over the passengers in the passengers array, and calling serveCustomer on each passenger
  for (var i = 0; i < passengers.length; i ++) {
    serveCustomer(passengers[i]);
  }
}
// calling servePassengers to get it all going
servePassengers(passengers);

  

  