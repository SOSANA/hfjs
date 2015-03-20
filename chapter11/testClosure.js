/*
 * Hello Closures!!!
 * 
 * Closure, noun: A closure is a function together with a referencing environment. 
 * To understand the word closure, we need to understand the idea of “closing” a function.
 * 
 * A closure is an inner function that has access to the outer (enclosing)
 * function's variables—scope chain. The closure has three scope chains: it has 
 * access to its own scope (variables defined between its curly brackets), it has 
 * access to the outer function's variables, and it has access to the global variables
 * 
*/

function makeTimer(doneMessage, n) {
    setTimeout(function() {
        alert(doneMessage);
    }, n);
}
makeTimer("Cookies are done!", 1000);
// brain power
/*
function handler() {
    alert(doneMessage);
}
function makeTimer(doneMessage, n) {
    setTimeout(handler, n);
}
makeTimer("Cookies are done!", 1000);
*/


// Exercise makePassword, multiplies, counter
// makePassword exercise
/*
function makePassword(password) {
    // the function that's returned from makePassword is a closure with an evironment 
    // containing the free variable password;
    // notice here w're using a named function expression, we don't have too, but it's handy 
    // way to refer to the name of the inner function but also notice we must invoke the 
    // returned function using tryGuess(not guess)
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    }
}
// we pass in the value "secret" to makePassword, so this is the value that's stored in 
// the closure's environment
var tryGuess = makePassword("secret");
// when we invoke tryGuess, we compare the word we pass in("nope" or "secret") with the value
// for the password in the environment for tryGuess
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));
*/

// multiply exercise
/*
function multN(n) {
    // the function that's returned from multN is a closure with an environment containing
    // the free variable n
    return function multBy(m) {
        return n*m;
    };
}
// So we invoke multN(3) and get back a funciton that multiplies any number you give by 3
var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 2: " + multBy3(3));
*/

// counter exercise
// modified version of the counter we just created. makeCounter takes no arguments, 
// but defines a count variable. It then creates and returns an object with one method, 
// increment. This method increments the count variable and returns it.
/*
function makeCounter() {
    var count = 0;
    // this is similar to our previous makeCounter function, except now we're returning an 
    // object with a increment method, instead of returning a function directly
    return {
        increment: function() {
            // the increment method has a free variable, count. So, increment is a closure 
            // with an environment containing the variable count.
            count++;
            return count;
        }
    };
}
// we call makeCounter and get back an object with a method(that is a closure)
var counter =makeCounter();
// we invoke the method in the usual way, and when we do, the method references the variable
// count in its environment
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
*/


// Using closures to implement a magic counter
// regular counter function
/*
var count = 0;
function counter() {
    // each time we call counter, we increment the global count variable, and return new value
    count = count + 1;
    return count;
}
console.log(counter());
console.log(counter());
console.log(counter());
*/

// counter function with closure
/*
function makeCounter() {
    // putting the count variable in the function makeCounter, So now count is a local variable
    var count = 0;
    //Now, We create the counter funciton which increments the count variable
    function counter() {
        // each time we call counter, we increment the global count variable, and return new value
        count = count + 1;
        return count;
    }
    // return the counter function, this is the closure. It holds the count in its environment
    return counter;
}
var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());
*/
