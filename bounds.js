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

    function intersectsByWidth(boundingObject) {
      var leftX1 = this.x - this.bound.x;
      var leftX2 = boundingObject.x - boundingObject.bound.x;
      var rightX1 = leftX1 + this.bound.width - 1;
      var rightX2 = leftX2 + boundingObject.bound.width - 1;
      return (leftX1 <= leftX2 && leftX2 <= rightX1) || (leftX2 <= leftX1 && leftX1 <= rightX2);
    }

    function intersectsByHeight(boundingObject) {
      var bottomY1 = this.y - this.bound.y;
      var bottomY2 = boundingObject.y - boundingObject.bound.y;
      var topY1 = bottomY1 + this.bound.height - 1;
      var topY2 = bottomY2 + boundingObject.bound.height - 1;
      return (bottomY1 <= bottomY2 && bottomY2 <= topY1) || (bottomY2 <= bottomY1 && bottomY1 <= topY2);
    }
  }
}());
