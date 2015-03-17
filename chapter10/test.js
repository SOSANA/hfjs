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

// sharpen your pencil 2 (sorting arrays)
function compareNumbers(num1, num2) {
    // this returns the array in ascending order, for descending order just 
    // reverse num2 - num1 in the if conditional, not in the else if, or else
    //return num1 - num2;
    
    if (num > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

// sort method that, given a function that knows how to compare two items in the array, 
// sorts the array for you. Here's an sort method example.
var numbersArray = [60, 50, 62, 58, 54, 54];
// we call the sort method on the array, passing it the compareNumbers function
numbersArray.sort(compareNumbers);
// when the sort is coplete the array is sorted in ascending order, and its displayed in console
// note that the sort method is is destructive, in that it changes the array, rather than returning 
// a new array that is sorted
console.log(numbersArray);


