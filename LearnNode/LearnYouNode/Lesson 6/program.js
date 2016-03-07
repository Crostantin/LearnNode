/**
 * http://usejsdoc.org/
 */

var myModule = require ("./myModule.js");
var dir = process.argv[2];
var extension = process.argv[3];

myModule.readDirFiltered (dir, extension, function(err, data){
	
	if (err){
		console.log("fuck");
	} else {
		console.log(data);
	}
	
});
