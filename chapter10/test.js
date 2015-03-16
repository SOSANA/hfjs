// sharpen your pencil 1
/*
function addN(n) {
  var adder = function(x) {
      return n + x;
  };
  return adder
}

var add2  = new addN(2);
console.log(add2(10));
console.log(add2(100));
*/

// sort method that, given a function that knows how to compare two items in the array, 
// sorts the array for you. Here's an sort method example.
var numbersArray = [60, 50, 62, 58, 54, 54];
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

// sharpen your pencil 2
