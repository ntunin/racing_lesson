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
      this.context.fillStyle = "black";
      this.context.strokeStyle = "black";
      this.context.strokeRect(x, y, this.pixelSize, this.pixelSize);
      this.context.fillRect(x + 2, y + 2, this.pixelSize - 4, this.pixelSize - 4);
    }

    this.clean = function() {
      this.context.fillStyle = "#31302d";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}());
