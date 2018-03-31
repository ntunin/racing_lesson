(function(){
  window.LifeCycle = function(canvasDrawer) {
    this.canvasDrawer = canvasDrawer;
    this.interval = null;

    this.start = function(game) {
      this.interval = setInterval(function() {
        game.update();
        canvasDrawer.draw(game);
      }, 250);
    }

    this.stop = function() {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.pause = function(game) {
      if(this.interval) {
        this.stop();
      } else {
        this.start(game);
      }
    }
  }

}());
