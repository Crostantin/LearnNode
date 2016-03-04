/**
 * http://usejsdoc.org/
 */

var fs = require ("fs");
var input = process.argv[2];

var text = fs.readFileSync(input);
console.log(text.toString().split("\n").length );