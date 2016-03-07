/**
 * http://usejsdoc.org/
 */

var http = require ('http');
var bl = require ('bl');
var S = require('string'); // importare modulo string

var index = 0;
var prefix = 'http';

var urlList = process.argv;
if (urlList.length !== 5) {
	console.log ('Errore: devi inserire 3 url\n');
} else {

	urlList.forEach(function( url ) {
		// --> cast con il modulo String per cercare la stringa iniziale
		if (S(url).startsWith(prefix)){ 	
			http.get (url,function callback (response){		
				  response.pipe(bl(function (err, data) {
					    if (err){
					      return console.error(err);
					      }
					    index++;
					    console.log ('request #: ' + index + 'to: ' + url);
					    console.log ('response #: ' + index + 'from: ' + url);
					    console.log(data.toString().split('\n')[0]);
					  })) ;
				
			});
			 
		}
	});
}

