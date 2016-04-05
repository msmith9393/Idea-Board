var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
var app = express();
var port = 3000;

// app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard cat',
  cookie: {}
}))
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client'));

app.get('/', function(req, res) {
  var sess = req.session.save(function(err) {
    if (err) {
      console.log(err);
    } else {
    res.send(express.static('index'));
      
    }
  })
});

app.listen(port, function() {
  console.log('App listening on port ', port);
});

module.exports = app;