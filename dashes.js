var number = function (number){
number = number.toString();
var result ="";
for (var i = 0; i<number.length; i++){
  if(i+1 < number.length && number.charAt(i) % 2 === 0 && number.charAt(i+1) % 2 === 0){
     result += number.charAt(i) + "-"
  }else{
    result += number.charAt(i);
  }
}
  console.log(result);
};

number(0254682309842039842);
