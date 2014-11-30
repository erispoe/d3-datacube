dist/d3.mapper.min.js:
	uglifyjs src/mapper.js \
	-o dist/d3.mapper.min.js \
	--source-map dist/d3.mapper.min.js.map \
	--source-map-root https://github.com/Erispoe/d3-mapper/tree/master/src \
	-p 5 -c -m