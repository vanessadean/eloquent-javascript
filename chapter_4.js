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

// A list
function arrayToList(array) {
  var list = null; 
  for (i=array.length-1; i>=0; i--) {
    list = prepend(array[i], list);
  }
  return list;
};

function prepend(value, list) {
  list = {
    value: value,
    rest: list
  };
  return list;
};

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

function nth(list, index) {
  var array = listToArray(list);
  return array[index];
};

// function nth(list, n) {
//   if (!list)
//     return undefined;
//   else if (n == 0)
//     return list.value;
//   else
//     return nth(list.rest, n - 1);
// }

// Deep Comparison
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
};




