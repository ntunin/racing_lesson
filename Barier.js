(function(){
  window.Barier = function(x, y) {
    this.x = x;
    this.y = y;
    this.bound = new Bound(0, 0, 1, 1);
  }
  Barier.proprototype = new BoundingObject();
}());
