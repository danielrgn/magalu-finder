var distance = require('google-distance');
distance.apiKey = 'AIzaSyAt0hVaEiEJ0c2JFDDUiTQjwU07bZ8HW18';

var app = {};

app.distanceMatrix = function(req, res){

  var origins = [req.params.origem];
  var destinations = [req.params.destino];

  distance.get(
  {
    origin: req.params.origem,
    destination: req.params.destino,
    language : 'pt'
  },
  function(err, data) {
      if (err) return console.log(err);
      res.json(data.distance);
  });
}

module.exports = app;
