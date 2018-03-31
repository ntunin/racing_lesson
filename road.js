(function(){
  window.Road = function(length) {
    this.length = length;
    this._addBariers = addBariers;
    this._addBariers();

    function addBariers() {
      // TODO: Сгенерировать препятствия (*)

      function rand(range) {
        return Math.floor(Math.random() * range);
      }
    }

  }
}())
