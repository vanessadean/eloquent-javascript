// The sum of a range
function range(start, end, step) {
  var array = [];
  var step = arguments[2] || 1;
  if (end < start && step < 1) {
    for (var i = start; i >= end; i+=step) {
      array.push(i);
    };
  } else {
    for (var i = start; i <= end; i+=step) {
      array.push(i);
    };
  }
  return array;
};

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Reversing an array
function reverseArray(array) {
  var newArray = [];
  var count = array.length;
  for (var i=0; i<count; i++) {
    newArray.push(array.pop());
  }
  return newArray;
};

// function reverseArrayInPlace(array){
//   var lastIndex = array.length-1;
//   for (var i=lastIndex; i>=0; i--){
//     var j = i-1;
//     array = array.concat(array.slice(j,i));
//   }
//   array = array.slice(lastIndex);
//   return array;
// };

function reverseArrayInPlace(array){
  var count = Math.floor(array.length/2);
  var lastIndex = array.length-1;
  for (var i=0; i<=count; i++){
    var swap = array[lastIndex-i];
    array[lastIndex-i] = array[i];
    array[i] = swap;
  }
  return array;
};
