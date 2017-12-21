var mongoose = require('mongoose');

var Loja = mongoose.model('Loja');
var Produto = mongoose.model('Produto');

var app = {};

var STATUS = require('../../config/status.json');

app.add = function(req, res){

  Loja.create(req.body)
       .then( (response) => {
         console.log(response);
         console.log(STATUS.success.create);
         res.status(STATUS.success.create).json(response);
       }, (error) => {
         console.log(error);
         res.status(STATUS.errServer.error).json(error);
       });
}

app.remove = function(req, res){

  Loja.remove({_id: req.params.id})
       .then( () => {
         res.sendStatus(STATUS.success.not_cnt);
       }, (error) => {
         console.log(error);
         res.status(STATUS.errServer.error).json(error);
       });
}

app.update = function(req, res){

  let store = req.body;

  Loja.findByIdAndUpdate(req.params.id, store, {new : true})
        .then( (data) => {
          if(data){
              res.status(STATUS.success.ok).json(data);
          }else{
            throw Error('Nenhuma loja foi encontrada.');
          }
        }, (error) => {
          console.log(error);
          res.status(STATUS.errServer.error).json(error);
        });
}

app.listAll = function(req, res){

  Loja.find({})
        .then( (data) => {
          if(data){
              res.status(STATUS.success.ok).json(data);
          }else{
            throw Error('Nenhuma loja foi encontrada.');
          }
        }, (error) => {
          console.log(error);
          res.status(STATUS.errServer.error).json(error);
        });
}

app.listById = function(req, res){

  Loja.findById(req.params.id)
        .then( (data) => {
          if(data){
              res.status(STATUS.success.ok).json(data);
          }else{
            throw Error('Nenhuma loja foi encontrada.');
          }
        }, (error) => {
          console.log(error);
          res.status(STATUS.errServer.error).json(error);
        });
}

app.search = function(req, res) {
  const nomeCodProduto = req.params.nomeCodProduto;
  const lat = req.params.lat;
  const lon = req.params.lon;

  let storeIds = [];

  Produto.find({
      $or : [
              {nomeProduto: { $regex:'.*' + nomeCodProduto + '.*', $options: 'i'}},
              {codigoProduto: { $regex:'.*' + nomeCodProduto + '.*', $options: 'i'}}
            ]
  }, function(error, products) {
      if(error){
          res.status(STATUS.errServer.error).json(err);
      }

      products.forEach(function(product){
        if(product.idLoja){
          storeIds.push(product.idLoja);
        }
      });

      Loja.find(
        {
          _id: {
            $in: storeIds
          },
          localizacao: {
            $near: {
                $geometry: { type: "Point",  coordinates: [ lon, lat ] },
                $maxDistance: 99999999
            }
          }
        }, (error, lojas) => {
          if (error) {
            console.log(error);
            res.status(STATUS.errServer.error).json(error);
          }else if(lojas){
            console.log(lojas);
            res.status(STATUS.success.ok).json(lojas);
          }else{
            throw Error('Nenhuma loja foi encontrada.');
          }
        });
  });
};

module.exports = app;
