d3-mapper
=========

A serialized map object for d3js

[D3.js](http://d3js.org/) provides [d3.map](https://github.com/mbostock/d3/wiki/Arrays#maps) objects to create safe key-value associative arrays.

d3.mapper is a serialized collection of d3.map that allows asynchronous manipulation and built-in operations between maps.

Think of a map as table with only two columns, keys and values. d3.mapper is an extension that allows to create and delete columns dynamically.

# Asynchronous data loading

Interactive visualization with data series in d3 can result in long loading time. The typical way of loading data with d3 is to load everything before starting to visualize. This approach works for small datasets, but is too time consuming for large datasets. With d3.mapper, it is possible to load only the necessary data to start the visualization, and load the rest of the data series in the background while the first data is visualized. The data visualization appears more quickly in the browser. It is even possible to load new pieces of data on-demand, and get rid of obsolete or deprecated parts of the data.

# Between maps operations

d3.mapper maps (columns) have a value and a time parameters. 