dist/d3.atlas.min.js:
	uglifyjs \
	src/index.js \
	src/cube.js \
	src/menu.js \
	-o dist/d3.atlas.min.js \
	-p 5 -c -m