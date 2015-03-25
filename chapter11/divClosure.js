/*
 * Creating a closure with an event handler
 * 
*/

// The version without the closure...
/*
// the count variable will need to be a global variable, because if it's local to handleClick
// (the click event handler on the button, see below), it'll just get re-initialized everytime
// we click the button
var count = 0;

window.onload = function() {
    // in the load event handler function, we get the button element, and add a click handler 
    // to the onclick property
    var button = document.getElementById("clickme");
    button.onclick = handleClick;
};
// here's the button's click handler function
function handleClick() {
    // we define the message variable
    var message = "You clicked me ";
    // we get the <div> element from the page
    var div = document.getElementById("message");
    // increment the counter
    count++;
    // update the <div> with the message containing how many times we've clicked
    div.innerHTML = message + count + " times!";
}
*/

// The version with the closure...
window.onload = function() {
    // all our variables are local to the window.onload. No problems with name clashing 
    var count = 0;
    var message = "You clicked me ";
    var div = document.getElementById("message");
   
    var button = document.getElementById("clickme");
    // we're setting up the click handler as a function expression assigned to the button's 
    // onlick property, so we can reference div, message and count in the function
    // this function has three free variables: div, message, and count. The browser creates a 
    // closure for the function that's assigned to the button.onlcick property. That environment 
    // has the div variable, the message variable and the count variable.
    // Remember lexical scoping!!!
    button.onclick = function() {
        count++;
        // notice the div variable in the closure holds an object when div was initialized in the 
        // window.onload we stored the object returned by documentgetElementById in the div variable
        // so we don't have to get the object from the DOM again, we have it already. This saves us a 
        // little bit of computation and makes our code just a tiny bit faster.  
        div.innerHTML = message + count + " times!";
    };   
};