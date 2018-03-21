(function(exports) {

  tileSheet = new createjs.SpriteSheet({
      "images": ["images/tiles.png"],
      "frames": {
          "height": 48,
          "width": 48,
          "regX": 0,
          "regY": 0,
          "count": 3
      }

  });
  tiles = new createjs.BitmapAnimation(tileSheet);

  exports.tileSheet = tileSheet
  exports.tiles = tiles

})(this)