(function(){
  window.LifeCycle = function(canvasDrawer) {
    this.canvasDrawer = canvasDrawer;
    this.interval = null;

    this.start = function(game) {
      // TODO: Запустить циклическую обработку методов   game.update(); и canvasDrawer.draw(game); с интервалом 0.25c
      game.update();
      canvasDrawer.draw(game);
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
