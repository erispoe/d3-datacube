d3.atlas.menu = function() {
  var m = new d3_atlas_menu;
  return m;
}

function d3_atlas_menu() {

	var _mapper,
		_variableId,
		_yearId,
		_updater;

	function exports(){}

	/**
    * Get and set the DOM id of variable selector
    **/
	exports.variableId = function(_x) {
		if (!arguments.length) return _variableId;
		_variableId = _x;
		return this;
	};

	/**
    * Get and set the DOM id of year selector
    **/
	exports._yearId = function(_x) {
		if (!arguments.length) return _yearId;
		_yearId = _x;
		return this;
	};

	/**
    * Get and set the mapper
    **/
    exports.mapper = function(_x) {
      if(!arguments.length) return _mapper ;
      _mapper = _x;
      if(!_mapper.menu() != this) _mapper.menu(this) ;
      return this;
    }

	return exports;

}