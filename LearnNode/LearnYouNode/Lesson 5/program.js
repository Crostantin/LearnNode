/**
 * http://usejsdoc.org/
 */

var fs = require ("fs");
var path = require ("path");

var extension = process.argv[3];

var list = fs.readdir(process.argv[2], function(err, list) {

	list.forEach ( function(list){
		if ( path.extname(list) === "." + extension ) {
				console.log (list);
			}
		});
});
