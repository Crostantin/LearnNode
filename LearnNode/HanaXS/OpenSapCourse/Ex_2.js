/**
 * http://usejsdoc.org/
 */

// associo ad una variabile il modulo opn
var http = require ('http');

// associo ad una variabile il modulo opn
// va installato, da prompt: npm install opn
// viene scaricato il file sorgente
var opn = require ('opn');


// è una funzione del modulo http, crea un WebServer. Indirizzo e porta vanno specificati
http.createServer(function (req, res){

	res.end("Hello World\n");


}).listen (3000, '127.0.0.1');

console.log ("Service running at http:127.0.0.1:3000");

// apre il web browser all'indirizzo passato nella funzione
opn('http://127.0.0.1:3000');