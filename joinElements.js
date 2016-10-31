 //join all elements

var result = "";
var myColor = ["Red", "Green", "White", "Black"];
*/
for (var i = 0; i<myColor.length; i++){ debugger;
  result += myColor[i] + " + ";
 }
 console.log(result);
  result = result.slice(1,-3);
console.log(result);
