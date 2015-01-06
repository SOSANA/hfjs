
// knowing the scope of your local and global variables
var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar (points) {
  var level = points / pointsPerLevel;
  
  if (level == 0) {
    
    return "Teddy Bear";
  
  } else if (level == 1) {
    
    return "Cat";
  
  } else if (level >= 2) {
  
    return "Gorilla";
  }
}

function updatePoints(bonus, newPoints) {
  var i = 0;
  while (i < bonus) {
    
    newPoints = newPoints + skill * bonus;
    
    i = i + 1;
  }
  
  return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
console.log(userPoints);
console.log(avatar);

// calculating the area of a circle and returning a value from a function
/*function calculateArea(r) {
  var area;
  
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    
    return area;
    
  }
}

var radius = 5.2;
var theArea = calculateArea(radius);
console.log("the area is: " + theArea);
*/

// making sure x gets added by 1
/*function addOne(x) {
  
  var x = x + 1;
  
 return x;
 
}

var age = 7;

console.log(addOne(age));
*/

