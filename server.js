var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/public/home.html');
});

app.get('/survey', function(req, res) {
  res.sendFile(__dirname + '/app/public/survey.html');
});

app.post('/server', function(req, res) {
  console.log(req.body); 
})


app.listen(PORT, function() {
  console.log('listening on port: ' + PORT)
});