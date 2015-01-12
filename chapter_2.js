//looping a triangle
var string = ""
for (counter = 0; counter < 7; counter++) {
  string += "#";
  console.log(string);
};

//FizzBuzz
for (counter = 1; counter <= 100; counter++) {
  var string = "";
  if (counter % 3 == 0) {
    string += "Fizz";
  };
  if (counter % 5 == 0) {
    string += "Buzz";
  };
  if (string == "") {
    console.log(counter);
  } else {
    console.log(string);
  };
};

//Chess Board
var boardSize = Number(prompt("Pick a board size", ""));
var string = "";
for (i = 0; i < boardSize; i++) {
  for (j = 0; j < boardSize; j++) {
    if (i % 2 == 0){
      j % 2 == 0 ? string += " " : string += "#";
    } else {
      j % 2 != 0 ? string += " " : string += "#";
    }
  };
  string += "\n";
};
console.log(string);