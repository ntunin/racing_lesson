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
    switch (event.code) {
      case "ArrowUp":
        return onUpButtonClick();
      case "ArrowDown":
        return onDownButtonClick();
      case "ArrowLeft":
        return onLeftButtonClick();
      case "ArrowRight":
        return onRightButtonClick();
      case "Space":
        return onRotateButtonClick();
      case "Pause":
        return onPauseButtonClick();
      case "F10":
        return onSoundButtonClick();
      case "Escape":
        return onOnOffButtonClick();
      case "F2":
        return onResetButtonClick();

    }
});
}

function onPauseButtonClick() {
  if(!window.game) {
    return;
  }
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
  if(!window.game) {
    return;
  }
  stop();
  start();
}

function onUpButtonClick() {
  if(!window.game) {
    return;
  }
  game.up();
}

function onDownButtonClick() {
  if(!window.game) {
    return;
  }
  game.down();
}

function onLeftButtonClick() {
  if(!window.game) {
    return;
  }
  game.left();
}

function onRightButtonClick() {
  if(!window.game) {
    return;
  }
  game.right();
}

function onRotateButtonClick() {
  if(!window.game) {
    return;
  }
  game.rotate();
}
