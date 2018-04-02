var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var app = express();
var path = require('path');
var fs = require('fs');
var data = require('./app/data/friends');

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

app.post('/server', function(req, res) {

  members.push(req.body);

  console.log(members); 
})

app.get('/api/friends', function(req, res) {
  res.json(data);
});


app.listen(PORT, function() {
  console.log('listening on port: ' + PORT)
});