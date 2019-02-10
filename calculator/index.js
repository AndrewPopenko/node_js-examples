// upported Urls: /calculator/add, /calculator/substract, calculator/multiply, /calculator/divide

var http = require('http');
var mat = require('./calculator');
var express = require('express');
var app = express();

app.listen('58011');
console.log("start server on port 58011");

app.get('/calculator/add', function(req, res) {
	var a = req.query.a;
	var b = req.query.b;
	console.log("add");
	console.log('a = ' + a);
	console.log('b = ' + b);
	res.writeHead(200, {'Contet-type': 'text/plain'});
	res.end(a + ' + ' + b + ' = ' + mat.add(a, b));
} );

app.get('/calculator/substract', function(req, res) {
	var a = req.query.a;
	var b = req.query.b;
	console.log("substract");
	console.log('a = ' + a);
	console.log('b = ' + b);
	res.writeHead(200, {'Contet-type': 'text/plain'});
	res.end(a + ' - ' + b + ' = ' + mat.substract(a, b));
} );

app.get('/calculator/multiply', function(req, res) {
	var a = req.query.a;
	var b = req.query.b;
	console.log("multiply");
	console.log('a = ' + a);
	console.log('b = ' + b);
	res.writeHead(200, {'Contet-type': 'text/plain'});
	res.end(a + ' * ' + b + ' = ' + mat.multiply(a, b));
} );

app.get('/calculator/divide', function(req, res) {
	var a = req.query.a;
	var b = req.query.b;
	console.log("divide");
	console.log('a = ' + a);
	console.log('b = ' + b);
	if (b == 0) {
		res.writeHead(200, {'Contet-type': 'text/plain'});
		res.end("cannot divide by 0");
	} else {
		res.writeHead(200, {'Contet-type': 'text/plain'});
		res.end(a + ' / ' + b + ' = ' + mat.divide(a, b));
	}
} );
