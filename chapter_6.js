//A vector type

function Vector(x,y){
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  var x = this.x + vector.x,
      y = this.y + vector.y;
  return new Vector(x,y);
}

Vector.prototype.minus = function(vector) {
  var x = this.x - vector.x,
      y = this.y - vector.y;
  return new Vector(x,y);
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)); }
});

//Another cell
