/*
 * A parameter is what's given in the function declaration/definition/prototype, 
 * the actual argument is what's passed when calling the function, an instance of 
 * a formal parameter.
 * 
 * An anonymous function is just a function expression without a name that’s 
 * used where we’d normally use a function reference.
 *  
 * Remember that the browser takes two passes through your JavaScript code: 
 * in the first pass, all your function declarations are parsed and the functions 
 * defined; in the second pass, the browser executes your code top down, which is 
 * when function expressions are defined. Because of this, functions created by 
 * declarations are defined before functions that are created using function 
 * expressions. And this, in turn, determines where and when you can invoke a 
 * function in your code.
 * Refer to the flyAndQuack.html example on nested scopes (global scope and local 
 * scope) that put in perspective on when the browser takes two passes for function 
 * declarations and function expressions.
 * 
 * lexical scope means you can determine the scope of a variable by reading the 
 * structure of the code, as opposed to waiting until the code runs to figure it out.
 * 
*/


// vaccine exercise
// before applying anonymous function
/*
function vaccine(dosage) { 
    if (dosage > 0) { 
        inject(dosage);
    } 
}

administer(patient, vaccine, time);
*/

/*
// after applying anonymous function
administer(patient, function (dosage) { 
    if (dosage > 0) { 
        inject(dosage);
    } 
}, time);
*/


/*
 *  Sharpen your pencil - rework the code to use anonymous functions and
 * task: circle any anonymous functions that are already being used
 * refactored to show anonymous functions
*/
/*
// assigning a function expression to the window.onload property
window.onload = function() { 
    var button = document.getElementById("bake"); 
    // assigning a function expression to the button onclick property
    button.onclick = function() { 
        console.log("Time to bake the cookies."); 
        cookies.bake(2500); 
    }; 
};  

var cookies = { 
    instructions: "Preheat oven to 350...",
    //anonymous function being used below
    bake: function(time) {
              console.log("Baking the cookies."); 
              setTimeout(done, time); 
          } 
}; 

function done() { 
    alert("Cookies are ready, take them out to cool."); 
    console.log("Cooling the cookies."); 
    //anonymous function being used below
    var cool = function() { 
        alert("Cookies are cool, time to eat!"); 
    }; 
    setTimeout(cool, 1000); 
}
*/

/*
// original before refactor of anonymous functions
window.onload = init; 

var cookies = { 
    instructions: "Preheat oven to 350...",
    //anonymous function being used below
    bake: function(time) { console.log("Baking the cookies."); 
    setTimeout(done, time); 
          } 
}; 

function init() { 
    var button = document.getElementById("bake"); 
    button.onclick = handleButton; 
} 

function handleButton() { 
    console.log("Time to bake the cookies."); 
    cookies.bake(2500); 
} 

function done() { 
    alert("Cookies are ready, take them out to cool."); 
    console.log("Cooling the cookies."); 
    //anonymous function being used below
    var cool = function() { 
        alert("Cookies are cool, time to eat!"); 
    }; 
    setTimeout(cool, 1000); 
}
*/