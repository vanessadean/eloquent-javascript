//looping a triangle
var string = ""
for (counter = 0; counter < 7; counter++) {
  string += "#";
  console.log(string);
};
// for (var line = "#"; line.length < 8; line += "#")
//   console.log(line);

//FizzBuzz
for (counter = 1; counter <= 100; counter++) {
  var string = "";
  if (counter % 3 == 0) {
    string += "Fizz";
  };
  if (counter % 5 == 0) {
    string += "Buzz";
  };
  string == "" ? console.log(counter) : console.log(string);
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
    // if ((x + y) % 2 == 0)
    //   board += " ";
    // else
    //   board += "#";
  };
  string += "\n";
};
console.log(string);