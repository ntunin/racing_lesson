(function(){
  window.Car = function () {
      this.x = 5;
      this.y = 0;
      this.bound = new Bound(1, 0, 3, 5);

      this.left = function() {
        if(this.x > 2) {
          this.x--;
        }
      }

      this.right = function() {
        if(this.x < 7) {
          this.x++;
        }
      }

      this.up = function() {
        this.y++;
      }
    }
    Car.prototype = new BoundingObject();
}());
