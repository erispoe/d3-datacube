dist/d3.mapper.min.js:
	uglifyjs \
	src/index.js \
	src/mapper.js \
	-o dist/d3.mapper.min.js \
	-p 5 -c -m