function World(width, height){
  this.width = width;
  this.height = height;
  this.plan = [];
}

World.prototype.create_map = function(){
  for (var i=0; i<=this.height; i++){
    var string = "";
    if (i == 0 || i == this.height) {
      for (var j=0; j<=this.width; j++) {
        string += "#";
      }
    } else {
      for (var j=0; j<=this.width; j++) {
        if (j == 0 || j == this.width) { 
          string += "#";
        } else {
          string += " ";
        } 
      }
    }
    this.plan.push(string);
  }
}

var directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};

