// Flattening
var arrays = [[1, 2, 3], [4, 5], [6]];
arrays.reduce(function(startValue,nextValue){
  return startValue.concat(nextValue);
});

// Mother-child age difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var differences = ancestry.map(function(person) {
  if (byName[person.mother])
    console.log(byName[person.mother]);
    return person.born - byName[person.mother].born;
});


//Historical life expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

// Every and then some
function every(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i]))
      return false;
  }
  return true;
}

function some(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      return true;
  }
  return false;
}

