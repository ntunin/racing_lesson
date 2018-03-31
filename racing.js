(function(){
  window.Racing = function() {
    this.road = new Road(300);
    this.car = new Car();
    this.status = "initial";
    this.stateDrawer = new StateDrawer(this);
    this._isCarCrashed = isCarCrashed;
    this._isRaceFinished = isRaceFinished;
    this._moveCarUp = moveCarUp;
    this._defineStatus = defineStatus;
  }

  Racing.prototype = new Game();

  Racing.prototype.rotate = function() {
    if(this.status != "initial") {
      return;
    }
    this.status = "running";
  }

  Racing.prototype.left = function() {
    if(this.status != "running") {
      return;
    }
    this.car.left();
  }

  Racing.prototype.right = function() {
    if(this.status != "running") {
      return;
    }
    this.car.right();
  }

  Racing.prototype.update = function() {
    this._moveCarUp();
    this._defineStatus();
  }

  Racing.prototype.getCurrentState = function() {
    return this.stateDrawer.getCurrentState();
  }

  function moveCarUp() {
    if(this.status != "running") {
      return;
    }
    this.car.up();
  }

  function defineStatus() {
    if(this.status !== "running") {
      return;
    }
    if(this._isCarCrashed()) {
      this.status = "crashed";
    } else if (this._isRaceFinished()) {
      this.status = "finished";
    }
  }

  function isRaceFinished() {
    return this.car.y >this.road.length;
  }

  function isCarCrashed() {
    var racing = this;
    for(var i = 0; i < this.road.bariers.length; i++) {
      var barier = this.road.bariers[i];
      if(racing.car.intersects(barier)) {
        return true;
      }
    }
    return false;
  }

}());
