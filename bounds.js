(function(){
  window.Bound = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  window.BoundingObject = function() {
    this.bound = null;
    this.x = 0;
    this.y = 0;

    this._intersectsByWidth = intersectsByWidth;
    this._intersectsByHeight = intersectsByHeight;

    this.intersects = function(boundingObject) {
      return this._intersectsByHeight(boundingObject)&&
             this._intersectsByWidth(boundingObject);
    }
// TODO: определить алгоритмы пересечения интервалов (*)
    function intersectsByWidth(boundingObject) {
    }

    function intersectsByHeight(boundingObject) {
    }
  }
}());
