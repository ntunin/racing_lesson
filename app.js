window.onload = function() {
  addEventListeners();
  setupVariabels();
}

function setupVariabels() {
  window.canvasDrawer = new CanvasDrawer(document.getElementById("tetris-canvas"));
  window.lifeCycle = new LifeCycle(canvasDrawer);
}

function addEventListeners() {
  document.addEventListener('keydown', function(event) {
    event.preventDefault();
    // TODO: добавить обработчики клавиатуры
    switch (event.code) {
      case "ArrowUp":
        return ;
      case "ArrowDown":
        return ;
      case "ArrowLeft":
        return ;
      case "ArrowRight":
        return ;
      case "Space":
        return ;
      case "Pause":
        return ;
      case "F10":
        return ;
      case "Escape":
        return ;
      case "F2":
        return ;

    }
});
}


  // TODO: Удалить возожность нажимать на кнопки (кроме включения), если тетрис не включен

function onPauseButtonClick() {
  lifeCycle.pause(window.game);
}

function onSoundButtonClick() {
}

function onOnOffButtonClick() {
  (window.game)? stop() : start();
}

function stop() {
  lifeCycle.stop();
  this.canvasDrawer.clean();
  game = null;
}

function start() {
  game = new Racing();
  lifeCycle.start(game);
}

function onResetButtonClick() {
  stop();
  start();
}

function onUpButtonClick() {
  game.up();
}

function onDownButtonClick() {
  game.down();
}

function onLeftButtonClick() {
  game.left();
}

function onRightButtonClick() {
  game.right();
}

function onRotateButtonClick() {
  game.rotate();
}
