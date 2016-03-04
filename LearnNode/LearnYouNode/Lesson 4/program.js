/**
 * http://usejsdoc.org/
 */

var fs = require ("fs");
var input = process.argv[2];

var text = fs.readFile(input, function(err, data) {
	
	console.log(data.toString().split("\n").length - 1 );
	
});