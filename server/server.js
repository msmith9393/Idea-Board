var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  res.send(express.static('index'));
});

app.listen(port, function() {
  console.log('App listening on port ', port);
});

module.exports = app;