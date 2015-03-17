/*
 * The sort method has sorted numbersArray in ascending order because when we return the 
 * values 1, 0 and -1, we’re telling the sort method:
 * 1: place the first item after the second item 
 * 0: the items are equivalent, you can leave them in place 
 * -1: place the first item before the second item.
*/

// each item in the products array is an object
var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                 { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
                 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                 { name: "Water", calories: 0, color: "clear", sold: 62123 }
               ];
// compareSold takes two cola product objects, and compares the sold property of colaA
// to the sold property of colaB
// This function will make the sort method sort the colas by number of bottles sold in ascending order
function compareSold(colaA, colaB) {
    // also could use this for compairing numbers
    // return colaA - ColaB; rather than if statement for sorting numbers
    if (colaA.sold > colaB.sold) {
		return 1;
	} else if (colaA.sold === colaB.sold) {
		return 0;
	} else {
		return -1;
	}
}

// function for sorting name
function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
		return 1;
	} else if (colaA.name === colaB.name) {
		return 0;
	} else {
		return -1;
	}
}

// function for sorting calories
function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
		return 1;
	} else if (colaA.calories === colaB.calories) {
		return 0;
	} else {
		return -1;
	}
}

// function for sorting color
function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
		return 1;
	} else if (colaA.color === colaB.color) {
		return 0;
	} else {
		return -1;
	}
}


// this new function iterates through each property in our products object and 
// prints the products so they look nice in the console ( if we just write
// console.log(products), you can see the output but it doesn't look very good)
function printProducts(products) {
	for (var i = 0; i < products.length; i++) {
		console.log("Name: " + products[i].name +
		            ", Calories: " + products[i].calories +
		            ", Color: " + products[i].color +
		            ", Sold: " + products[i].sold);
	}
}

// sort and display the sold amount
console.log("\n------- sorting by sold -------");
products.sort(compareSold);
printProducts(products);

// sort and display the name
console.log("\n------- sorting by name -------");
products.sort(compareName);
printProducts(products);

// sort and display the calories
console.log("\n------- sorting by calories -------");
products.sort(compareCalories);
printProducts(products);

// sort and display the colors
console.log("\n------- sorting by color -------");
products.sort(compareColor);
printProducts(products);

     

