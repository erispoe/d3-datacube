d3.atlas.menu = function() {
  var m = new d3_atlas_menu;
  return m;
}

function d3_atlas_menu() {

	var _mapper,
		_variableId,
		_yearId,
		_updater = function(){};

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
	exports.yearId = function(_x) {
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
      return this;
    }

    /**
    * Get and set the updater function, called when a menu element changes
    **/
    exports.updater = function(_x) {
      if(!arguments.length) return _updater ;
      _updater = _x;
      return this;
    }

    /**
    * Update the menu elements
    **/
    exports.update = function() {

        if(!_variableId) return;

        d3.select("#" + _variableId)
            .selectAll("option")
            .remove();

    	d3.select("#" + _variableId)
    		.selectAll("option")
    		.data(Object.keys(_mapper.variables()))
    		.enter()
    		.append("option")
    		.attr("value", function(d) { return d; })
    		.text(function(d) { return d; });

        d3.select("#" + _variableId)
            .on("change", function() {
                _updater.call();
            });

    	this.updateYear();
    };

    exports.updateYear = function() {

        if(!_yearId) return;

    	var sel = document.getElementById(_variableId);

        d3.select("#" + _yearId)
            .selectAll("option")
            .remove();

		d3.select("#" + _yearId)
    		.selectAll("option")
    		.data(_mapper.variables()[sel.options[sel.selectedIndex].value])
    		.enter()
    		.append("option")
    		.attr("value", function(d) { return d; })
    		.text(function(d) { return d; });

        d3.select("#" + _yearId)
            .on("change", function() {
                _updater.call();
            });

    };

    /**
    * Get the d3.map select in the menu
    **/
    exports.selected = function() {
    	var _vSel = document.getElementById(_variableId),
    		_ySel = document.getElementById(_yearId);

    	var _v = _vSel.options[_vSel.selectedIndex].value,
    		_y = _ySel.options[_ySel.selectedIndex].value;
    		
    	return mapper.get(_v, _y);
    }

	return exports;

}