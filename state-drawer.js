(function(){
  window.StateDrawer = function(racing) {
    this.racing = racing;
    this.clean = clean;
    this.cleanRow = cleanRow;
    this.drawCar = drawCar;
    this.drawBariers= drawBariers;

    this.bound = new Bound(0, 0, 10, 20);
    this.state = [];
    this.getCurrentState = getCurrentState;
    this.helpers = {
      cancelRedrawed: 0
    };

    for(var i = 0; i < this.bound.height; i++) {
      var row = [];
      this.cleanRow(row);
      this.state[i] = row;
    }

    function clean(){
      // TODO: в цикле для каждой строки массива state вызвать cleanRow() (1/2)
    }

    function cleanRow(row) {
        // TODO: в цикле для каждого элемента строки присвоить 1 если элемент первый или последний и 0 в противном случае (1/2)
    }

    function getCurrentState() {
      this.clean();
      this.drawCar();
      this.drawBariers();
      return this.state;
    }

    function drawCar() {
      if(this.racing.status === "crashed" ||
          this.racing.status === "finished") {
          this.helpers.cancelRedrawed++;
          if (this.helpers.cancelRedrawed % 2 === 0 &&
              this.helpers.cancelRedrawed < 7) {
            return;
          }
      }
      for(var i = 0; i < 4; i++) {
        var y = this.bound.height - i - 1;
        if(i %2 == 0) {
          for(var j = 0; j < 3; j++) {
            var x = this.racing.car.x - 1 + j;
            this.state[y][x] = 1;
          }
        } else {
          var x = this.racing.car.x;
          this.state[y][x] = 1;
        }

      }
    }

    function drawBariers() {
      for(var i = 0; i < this.racing.road.bariers.length; i++) {
        var barier = this.racing.road.bariers[i];
        var distance = barier.y - this.racing.car.y
        var y = this.bound.height - distance;
        if(distance > this.bound.height || distance < 1) {
          continue;
        }
        var x = barier.x;
        this.state[y][x] = 1;
      }
    }
  }

  StateDrawer.prototype = new BoundingObject();
}());
