(function(){
  window.CanvasDrawer = function(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.pixelSize = Math.floor(canvas.width/10);

    this.draw = function(game) {
      this.clean();
      var state= game.getCurrentState();
      for(var i = 0; i < state.length; i++) {
        var row = state[i];
        var y = i * this.pixelSize;
        for(var j = 0; j < row.length; j++) {
          var pixel = row[j];
          if(pixel) {
            var x = this.pixelSize * j;
            this.drawPixel(x, y);
          }
        }
      }
    }

    this.drawPixel = function(x, y) {
      // TODO: нарисовать квадратный пиксель размером this.pixelSize с рамкой 
    }

    this.clean = function() {
      // TODO: Очисить экран цветом #31302d
    }
  }
}());
