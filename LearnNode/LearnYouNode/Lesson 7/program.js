/**
 * http://usejsdoc.org/
 */

var http = require ('http');

var url = process.argv[2];

http.get (url,function callback (response){
	
	response.setEncoding('UTF-8');
	response.on ("data", console.log);
	response.on ('error', console.error);
	
});
