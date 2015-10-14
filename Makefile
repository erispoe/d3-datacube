dist/d3.datacube.min.js:
	uglifyjs \
	src/index.js \
	src/cube.js \
	src/menu.js \
	-o dist/d3.datacube.min.js \
	-p 5 -c -m