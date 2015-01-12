//looping a triangle
var string = ""
for (counter = 0; counter < 7; counter ++) {
  string += "#";
  console.log(string);
};

//FizzBuzz
for (counter = 1; counter <= 100; counter ++) {
  var string = ""
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