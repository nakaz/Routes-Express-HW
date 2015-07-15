var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var config = require('./config/config.json');

app.use(express.static('public'));

var router = express.Router();
var calculator = require('./public/js/script.js');

app.set('view engine', 'jade');
app.set('views', './views');


app.get('/', function (req, res){
  res.render('index');
});

app.get('/:math/:x', function (req, res){
  var math = req.params.math;
  res.send('422 Client Error. Please input two numbers');
});

app.get('/:math/:x/:y', function (req, res){
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var math = req.params.math;

  if(math === "add"){res.json(calculator.add(x,y));}
  if(math === "subtract"){res.json(calculator.subtract(x,y));}
  if(math === "multiply"){res.json(calculator.multiply(x,y));}
  if(math === "divide"){res.json(calculator.divide(x,y));}

});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Buggah stay werkin @ http://%s:%s', host, port);
});