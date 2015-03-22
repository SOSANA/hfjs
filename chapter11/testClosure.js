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
 * Remember that closure conatains the actual environment, not a copy. often misleads people 
 * learning closures is that they think the environment in the closure must have a copy of all 
 * the variables and their values. It doesn’t. In fact, the environment references the live 
 * variables being used by your code, so if a value is changed by code outside your closure 
 * function, that new value is seen by your closure function when it is evaluated.
*/

// pass a function to a function. The function we pass will be executed in a completely different context 
// than the one in which it was defined. 
// modify our bake example in brain power to show closure contains actual environment, not a copy
function setTimer(doneMessage, n) {
    // The closure is created here
    // // When we call setTimeout and pass to it the function expression, a closure is created 
    // containing the function along with a reference to the environment.
    setTimeout(function() {
        // free variable doneMessage that we are using as a handler for setTimeout
        alert(doneMessage);
    }, n);
    // we're changin the value of doneMessage after we call setTimeout
    // Then, when we change the value of doneMessage to “OUCH!” outside of the closure, it’s 
    // changed in the same environment that is used by the closure.
    doneMessage = "OUCH!";
}
// 1000 milliseconds later, the function in the closure is called. This function references the 
// doneMessage variable, which is now set to “OUCH!” in the environment, so we see “OUCH!” in the alert.
// not "Cookies are done!"
setTimer("Cookies are done!", 1000);

// brain power 
// pass a function to a function. 
// The function we pass will be executed in a completely different context than the one in which it was defined.
// Here, we’re passing a function expression that contains a free variable, doneMessage , to the function 
// setTimeout . We evaluate the function expression to get a function reference, which is then passed to setTimeout. 
// The setTimeout method holds on to this function (which is a function plus an environment—in other words, a closure) 
// and then 1000 milliseconds later it calls that function. And again, the function we’re passing into setTimeout is 
// a closure because it comes along with an environment that binds the free variable, doneMessage , to the string 
/*
function makeTimer(doneMessage, n) {
    // we use a have a function
    setTimeout(function() {
        // free variable doneMessage that we are using as a handler for setTimeout
        alert(doneMessage);
    }, n);
}
// this function will be executed 1000 milliseconds (1 second) from now, long after the 
// function makeTimer has completed
makeTimer("Cookies are done!", 1000);
*/

// What happens if we did it like this?
// will get undefined errors, doneMessage is undefined
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
// Returning a function from a function
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
