var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

consign({cwd: 'api'})
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app);

module.exports = app;
