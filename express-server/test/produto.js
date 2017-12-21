var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var expect = chai.expect;

var mongoose = require('mongoose');
var Produto = mongoose.model('Produto');

chai.use(chaiHttp);

var produto = {
		codigoProduto : "PTV4588",
		idLoja: mongoose.Types.ObjectId(),
		nomeProduto: "Produto Teste Valido",
		valor: 149.90
}

beforeEach(function(done) {
	Produto.remove({}, function (error) {
	    done();
	});
});

describe('#ProdutoController -> /GET', function () {
    it('#lista todos os produtos cadastrados', function (done) {

        chai.request(server).get('/produtos').end(function (error, res) {
						should.exist(res.body);
						res.should.have.status(200);
            res.body.should.be.a('array');
						res.body.length.should.be.eql(0);
            done();
        });
    });
});

describe('#ProdutoController -> /GET:id', function () {
    it('#lista apenas 1 produto por ID', function (done) {

				Produto.create(produto, function(error, prod){

					chai.request(server).get('/produtos/'+ prod._id).end(function (error, res) {
							should.exist(res.body);
							res.should.have.status(200);
	            res.body.should.be.an('object');
							res.body.should.have.property('codigoProduto');
              res.body.should.have.property('idLoja');
              res.body.should.have.property('nomeProduto');
							res.body.should.have.property('valor');
              res.body.should.have.property('_id').eql(prod.id);
	            done();
	        });
				});

    });
});

describe('#ProdutoController -> /POST', function () {
    it('#cadastro de novo produto com dados validos', function (done) {

        chai.request(server).post('/produtos').send(produto).end(function (error, res) {
						should.exist(res);
            res.should.have.status(201);
            res.body.should.be.an('object');
            done();
        });
    });
});

describe('#ProdutoController -> /DELETE:id', function () {
    it('#deve deletar 1 produto por ID', function (done) {

			Produto.create(produto, function(error, prod){

				chai.request(server).delete('/produtos/'+ prod._id).end(function (error, res) {
						should.exist(res.body);
						res.should.have.status(204);
						done();
				});
			})
    });
});

describe('#ProdutoController -> /PUT:id', function () {
    it('#deve atualizar 1 produto por ID', function (done) {

			Produto.create(produto, function(error, prod){

				id = mongoose.Types.ObjectId();

				prod_change = {
						codigoProduto : "AAA888",
						idLoja: id,
						nomeProduto: "Produto Teste Alterado",
						valor: 150.00
				};

				chai.request(server).put('/produtos/'+ prod._id).send(prod_change).end(function (error, res) {
						should.exist(res.body);
						res.should.have.status(200);
						res.should.be.an('object');
						res.body.should.have.property('codigoProduto').eql("AAA888");
						res.body.should.have.property('idLoja').eql(''+id+'');
						res.body.should.have.property('nomeProduto').eql("Produto Teste Alterado");
						res.body.should.have.property('valor').eql( 150.00);
						done();
				});
			})
    });
});
