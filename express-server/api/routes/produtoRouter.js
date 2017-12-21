module.exports = function(app) {

  var api = app.controllers;

  app.route('/produtos')
        .get(api.produtoController.listAll)
        .post(api.produtoController.add);

  app.route('/produtos/:id')
        .get(api.produtoController.listById)
        .delete(api.produtoController.remove)
        .put(api.produtoController.update);

  app.route('/pesquisa-produtos/:nomeCodProduto/:idLoja')
        .get(api.produtoController.listProductsSearch);
}
