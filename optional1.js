var num = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function numTypes(array){
  var args = [], count = [], sum=0;
  for(var i = 0; i < array.length; i++){ //this for loop pushes all the unique items to args
    if(args.indexOf(array[i]) === -1){
      args.push(array[i]);
      for (var j =0 ;j<array.length; j++){ //this loops checks how many occurances of each item in args exists in array 'num' and pushes the 'sum' into an array 'count'
        if(array[i] === array[j]){
          sum += 1;
        }
      }
      count.push(sum);
      sum = 0;
    }
  };
  return args[count.indexOf(Math.max.apply(null, count))]; //this checks which is the max number of occurances, what position it has within the count array and what does that represent(which value) in args.
};

console.log(numTypes(num));
