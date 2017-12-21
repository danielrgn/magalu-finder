var mongoose = require('mongoose');

var Produto = mongoose.model('Produto');
var Loja = mongoose.model('Loja');

mongoose.Promise = require('bluebird');

var app = {};

var STATUS = require('../../config/status.json');

app.add = function(req, res){

  Produto.create(req.body)
       .then((response) => {
         res.status(STATUS.success.create).json(response);
       }, (error) => {
         console.log(error);
         res.status(STATUS.errServer.error).send(error);
       }).catch(e => {
         console.log("EROU:" +e);
       });
}

app.remove = function(req, res){

  Produto.remove({_id: req.params.id})
       .then( () => {
         res.sendStatus(STATUS.success.not_cnt);
       }, (error) => {
         console.log(error);
         res.status(STATUS.errServer.error).send(error);
       });
}

app.update = function(req, res){

  Produto.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then( (data) => {
          if(data){
              res.status(STATUS.success.ok).json(data);
          }else{
            throw Error('Nenhum produto foi encontrado.');
          }
        }, (error) => {
          console.log(error);
          res.status(STATUS.errServer.error).send(error);
        });
}

app.listAll = function(req, res){

  Produto.find({})
        .then( (data) => {
          if(data){
              res.status(STATUS.success.ok).json(data);
          }else{
            throw Error('Nenhum produto foi encontrado.');
          }
        }, (error) => {
          console.log(error);
          res.status(STATUS.errServer.error).send(error);
        });
}

app.listById = function(req, res){

  Produto.findById(req.params.id)
        .then( (data) => {
          if(data){
              res.status(STATUS.success.ok).json(data);
          }else{
            throw Error('Nenhum produto foi encontrado.');
          }
        }, (error) => {
          console.log(error);
          res.status(STATUS.errServer.error).send(error);
        });
}

app.listProductsSearch = function(req, res){
    const nomeCodProduto = req.params.nomeCodProduto;
    const idLoja = req.params.idLoja;

    Produto.find({$or : [
                { 'nomeProduto' : { $regex:'.*' + nomeCodProduto + '.*', $options: 'i'}},
                { 'codigoProduto' : { $regex:'.*' + nomeCodProduto + '.*', $options: 'i'}}
            ],
            'idLoja' : idLoja
    }, function(error, products) {
        if(error){
            res.status(STATUS.errServer.error).send(err);
        }else if(products){
            console.log(products);
            res.status(STATUS.success.ok).json(products);
        }else{
          throw Error('Nenhum produto foi encontrado.');
        }
    }, (error) => {
        console.log(error);
        res.status(STATUS.errServer.error).send(error);
    });
}

module.exports = app;
