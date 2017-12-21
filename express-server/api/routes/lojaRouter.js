module.exports = function(app) {

  var api = app.controllers;

  app.route('/lojas')
        .get(api.lojaController.listAll)
        .post(api.lojaController.add);

  app.route('/lojas/:id')
        .get(api.lojaController.listById)
        .delete(api.lojaController.remove)
        .put(api.lojaController.update);

  app.route('/pesquisa-lojas/:nomeCodProduto/:lat/:lon')
        .get(api.lojaController.search);
}
