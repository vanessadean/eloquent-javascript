//Minimum
function min(a, b) {
  if (a < b) 
    return a;
  else
    return b;
};

//Recursion
function isEven(N) {
  if (N == 0) {
    return true;
  }
  else if (N == 1) {
    return false;
  } 
  else if (N-2 < 0) {
    return isEven(-N);
  } else {
    return isEven(N-2);
  }
};

//Bean Counting
function countBs(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "B")
      counter++;
  };
  return counter;
};

function countChar(string, char) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == char)
      counter++;
  };
  return counter;
};

// function countBs(string) {
//   return countChar(string, "B");
// }

var string = "JavaScript";
var newString = "";
for (i=0; i<string.length; i++){
  var pop = string.slice(-1);
  string = pop + string.slice(0,-1);
}