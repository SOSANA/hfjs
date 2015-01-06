//Creating an array from scratch and adding to it
//with push
var genres = [];
genres.push("Rockabilly");
genres.push("Ambient");
var size = genres.length;
console.log(size);
console.log(genres);


//magnet exercise 2 using for loop
/*
var products = ["Choo Choo Chocoloate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
   
}
*/


//magnet exercise 1 using while loop
/*
var products = ["Choo Choo Chocoloate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
   i = i + 1;
}
*/

// sharpen your pencil, find the most recent ice cream created from array
/*
var products = ["Choo Choo Chocoloate", "Icy Mint", "Cake Batter", "Bubblegum"]

var last = products.length - 1;

var recent = products[last];

console.log(recent);
*/

// flavors array
/*
var flavors = ["vanilla", "butterscotch" , "lavender", "chocolate", "cookie dough" ];
console.log(flavors);
var flavorOfTheDay = flavors[2];
console.log(flavorOfTheDay);

flavors[3] = "vanilla chocolate chip";

var flavorOfTheDay = flavors[3];
var numFlavors = flavors.length;
console.log(numFlavors);
console.log(flavorOfTheDay);
*/
