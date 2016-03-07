/**
 * http://usejsdoc.org/
 */

var fs = require('fs');
var path = require('path');

exports.readDirFiltered = function (dir, extension, callback) {
	
	var list = fs.readdir (dir, function(err, list){
		
		if (err){
			return callback(err);
		}
		
		list.forEach ( function(list){
			if ( path.extname(list) === "." + extension ) {
					return callback(null,list);
				}
			});	
	});	
};