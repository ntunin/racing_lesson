(function(){
  window.Car = function () {
      this.x = 5;
      this.y = 0;
      this.bound = new Bound(1, 0, 3, 5);
      // TODO: добавить навигацию
      this.left = function() {
        if(this.x > 2) {
        }
      }

      this.right = function() {
        if(this.x < 7) {
        }
      }

      this.up = function() {
      }
    }
    Car.prototype = new BoundingObject();
}());
