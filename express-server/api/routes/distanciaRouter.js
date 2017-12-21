module.exports = function(app) {

  var api = app.controllers;

  app.route('/calcular-distancia/:origem/:destino')
        .get(api.distanciaController.distanceMatrix);
}
