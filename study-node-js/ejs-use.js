var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.listen('58011');

console.log("start server on port 58011");

// POST /login gets urlencoded bodies
app.post('/about_us', urlencodedParser, function (req, res) {
	console.log(req.body);
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.exampleInputEmail1)
})

app.get('/', function(req, res) {
	res.render('main',{});
});

app.get('/about_us', function(req, res) {
	res.render('about_us');
});

app.get('/news', function(req, res) {
	console.log(req.query);
	var obj = {name: "Test", ocupation: "Driver", skills: ["subaru", "wv", "bmw"]}
	res.render('news', {newsID: "default", myParam: 321, myObj: obj});
});

app.get('/news/:id', function(req, res) {
	var ID = req.params.id;
  var obj = {name: "Andrew", ocupation: "Tester and developer", skills: ["java", "webdriver", "restassured"]}
	console.log("/news/:id");
	console.log('id = ' + ID);
	res.render('news', {newsID: ID, myParam: 123, myObj: obj});
} );
