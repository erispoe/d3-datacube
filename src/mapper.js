d3.mapper = function() {
  var m = new d3_mapper;
  return m;
}

function d3_mapper() {

	var _maps = {};

	function exports() {}
    
    /**
    * Adds a d3.map to the mapper
    * @param {d3.map} _m - The d3.map to add to the mapper
    * @param {string} _v - The name of the variable mapped in the d3.map
    * @param {d3.map} _y - The year or numerical series oredring of the variable mapped in the d3.map
    * @return {d3.mapper} - The d3.mapper with the d3.map added to it
    **/
    exports.add = function(_m, _v, _y) {
    	_y = typeof _y !== 'undefined' ? _y : 'null';
      if(!_maps[_v]){_maps[_v] = {}}
      _maps[_v][_y] = _m;
    	return this;
    }

    exports.mergeWith = function(_m) {

    }

    exports.array = function(_a, _id) {
      // Create the mapper object from an array representation
      if (!arguments.length) return this._getArray;
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