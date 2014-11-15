d3.mapper = function module() {

	var _maps = {};

	function exports() {}
    
    exports.add = function(_m, _v, _y) {
    	_y = typeof _y !== 'undefined' ? _y : 'null';
      if(!_maps[_v]){_maps[_v] = {}}
      _maps[_v][_y] = _m;
    	return this;
    }

    exports.maps = function(_x){
      if (!arguments.length) return _maps;
      return this;
    }

    exports.array = function(_a, _id) {
      _id = typeof _id !== 'undefined' ? _id : 'id';
      //TODO: check if all arrays have the same keys
      //TODO: returns an array representation of the mapper when _a is not specified
      var keys = Object.keys(_a[0]);
      keys.splice(keys.indexOf(_id), 1);

      for (var i = 0; i < keys.length; i++) {
        _v = keys[i];
        _o = {};
        for (var j = 0; j < _a.length; j++) {
          _o[_a[j][_id]] = _a[j][_v];
        };
        _m = d3.map(_o);
        this.add(_m, _v);
      };
      return this;
    }

    exports.get = function(_v, _y){
      // return a specific d3.map
      _y = typeof _y !== 'undefined' ? _y : 'null';
      if(_maps[_v][_y]){return _maps[_v][_y]};
      return this;
    }

	return exports;

}