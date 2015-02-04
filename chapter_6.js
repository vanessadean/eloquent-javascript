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
function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};
StretchCell.prototype.minWidth = function() {
  return this.width + 2;
};
StretchCell.prototype.minHeight = function() {
  return this.height;
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
}

//Sequence interface


