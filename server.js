var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var app = express();
var path = require('path');
var data = require('./app/data/friends');
var apiRoutes = require('./app/routing/apiRoutes');

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var members = [];
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/public/home.html');
});

app.get('/survey', function(req, res) {
  res.sendFile(__dirname + '/app/public/survey.html');
});

apiRoutes(app, data);

app.listen(PORT, function() {
  console.log('listening on port: ' + PORT)
});