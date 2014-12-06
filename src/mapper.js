d3.atlas.mapper = function() {
  var m = new d3_atlas_mapper;
  return m;
}

function d3_atlas_mapper() {

	var _maps = {},
      _keys = [];

	function exports() {}
    
    /**
    * Adds a d3.map to the mapper
    * @param {d3.map} _m - The d3.map to add to the mapper
    * @param {string} _v - The name of the variable mapped in the d3.map
    * @param {d3.map} _y - The year or numerical series oredring of the variable mapped in the d3.map
    * @return {d3.atlas.mapper} - The d3.atlas.mapper with the d3.map added to it
    **/
    exports.add = function(_m, _v, _y) {
    	_y = typeof _y !== 'undefined' ? _y : 'null';
      if(!_maps[_v]){_maps[_v] = {}}
      _maps[_v][_y] = _m;
    	return this;
    }

    /**
    * Merge a d3.atlas.mapper object with another one, provided they have the same keys
    **/
    exports.mergeWith = function(_m) {
      if(!_m.keys().compare(this.keys())){return this};
      // Extract and add all the d3.map from the new mapper _m
      for (var i = 0; i < Object.keys(_m.values()).length; i++) {
        var _v = Object.keys(_m.values())[i];
        for (var j = 0; j < _m.values()[_v].length; j++) {
          var _y = _m.values()[_v][j];
          var map = _m.get(_v, _y);
          this.add(map, _v, _y);
        };
      };
    }

    /**
    * Returns the ids, the keys
    **/
    exports.keys = function() {
      return _keys;
    }

    /**
    * Returns an array representation of all the values
    **/
    exports.values = function() {
      var _V = {}
      for (var i = 0; i < Object.keys(_maps).length; i++) {
        var _v = Object.keys(_maps)[i];
        var _Y = [];
        for (var j = 0; j < Object.keys(_maps[_v]).length; j++) {
          _Y.push(Object.keys(_maps[_v])[j]);
        };
        _V[_v] = _Y;
      };
      return _V
    }

    exports.array = function(_a, _id) {
      // Create the mapper object from an array representation
      if (!arguments.length) return this._getArray;
      _id = typeof _id !== 'undefined' ? _id : 'id';
      //TODO: check if all arrays have the same keys
      //TODO: returns an array representation of the mapper when _a is not specified
      var keys = Object.keys(_a[0]);
      keys.splice(keys.indexOf(_id), 1);

      // Extract keys
      for (var i = 0; i < _a.length; i++) {
        _keys.push(_a[i][_id]);
      };

      // Make individual maps and add them to the mapper with corresponding values and years
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