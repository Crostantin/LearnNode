/**
 * http://usejsdoc.org/
 */

var input = process.argv;
var number = 0;

for (var i = 2 ; i < input.length ; i++){
	
	number += Number(input[i]);
	console.log(number);
}

