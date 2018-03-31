(function(){
  window.Road = function(length) {
    this.length = length;
    this._addBariers = addBariers;
    this._addBariers();

    function addBariers() {
      this.bariers = [];
      var count = 8 + rand(100);
      for(var i = 0; i < count; i++) {
        var x = rand(6) + 1;
        var y = 15 + rand(length);

        var barier = new Barier(x, y);
        this.bariers.push(barier);
      }

      this.bariers.push(new Barier(4, 8));

      function rand(range) {
        return Math.floor(Math.random() * range);
      }
    }

  }
}())
