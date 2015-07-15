var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var config = require('./config/config.json');

app.use(bodyParser.json());

app.use(express.static('public'));

var router = express.Router();
var calculator = require('./public/js/script.js');

app.set('view engine', 'jade');
app.set('views', './views');


app.get('/', function (req, res){
  res.render('index');
});

app.get('/add/:x/:y', function (req, res){
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    var result = calculator.add(x, y);
    res.json(result);
});


app.get('/subtract/:x/:y', function (req, res){
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    var result = calculator.subtract(x, y);
    res.json(result);
});

app.get('/multiply/:x/:y', function (req, res){
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    var result = calculator.multiply(x, y);
    res.json(result);
});

app.get('/divide/:x/:y', function (req, res){
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    var result = calculator.divide(x, y);
    res.json(result);
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Buggah stay werkin @ http://%s:%s', host, port);
});