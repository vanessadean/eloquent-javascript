// Flattening
var arrays = [[1, 2, 3], [4, 5], [6]];
arrays.reduce(function(flat,current){
  return flat.concat(current);
},[]);

// Mother-child age difference