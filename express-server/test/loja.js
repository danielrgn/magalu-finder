var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var expect = chai.expect;

var mongoose = require('mongoose');
var Loja = mongoose.model('Loja');

chai.use(chaiHttp);

var loja = {
  codigoFilial : "100",
  nomeLoja : "Magazine Luiza Teste",
  cep : "14402086",
  localizacao : {
    type: "Point",
    coordinates: [-47.3687540, -20.5138250]
  }
}

beforeEach(function(done) {
	Loja.remove({}, function (error) {
	    done();
	});
});

describe('#LojaController -> /GET', function () {
    it('#lista todas as lojas cadastradss', function (done) {

        chai.request(server).get('/lojas').end(function (error, res) {
						should.exist(res.body);
						res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        });
    });
});

describe('#LojaController -> /GET:id', function () {
    it('#lista apenas 1 loja por ID', function (done) {

				Loja.create(loja, function(error, loja){

					chai.request(server).get('/lojas/'+ loja._id).end(function (error, res) {
							should.exist(res.body);
							res.should.have.status(200);
	            res.body.should.be.an('object');
              res.body.should.have.property('codigoFilial');
              res.body.should.have.property('nomeLoja');
              res.body.should.have.property('cep');
              res.body.should.have.property('localizacao');
              res.body.should.have.property('_id').eql(loja.id);
	            done();
	        });
				})

    });
});

describe('#LojaController -> /POST', function () {
    it('#cadastro de uma nova loja com dados validos', function (done) {

        chai.request(server).post('/lojas').send(loja).end(function (error, res) {
						should.exist(res);
            res.should.have.status(201);
            res.body.should.be.an('object');
            done();
        });
    });
});

describe('#LojaController -> /DELETE:id', function () {
    it('#deve deletar 1 loja por ID', function (done) {

			Loja.create(loja, function(error, loja){

				chai.request(server).delete('/lojas/'+ loja._id).end(function (error, res) {
						should.exist(res.body);
						res.should.have.status(204);
						done();
				});
			})
    });
});

describe('#LojaController -> /PUT:id', function () {
    it('#deve atualizar 1 loja por ID', function (done) {

			Loja.create(loja, function(error, loja){

				loja_mod = {
            codigoFilial : 101,
            nomeLoja : "Magazine Luiza Teste II",
            cep : 14406303,
            localizacao : {
              type: "Point",
              coordinates: [-47.4272610, -20.5408240]
            }
				};

				chai.request(server).put('/lojas/'+ loja._id).send(loja_mod).end(function (error, res) {
						should.exist(res.body);
						res.should.have.status(200);
						res.should.be.an('object');
						res.body.should.have.property('codigoFilial').eql(101);
						res.body.should.have.property('nomeLoja').eql("Magazine Luiza Teste II");
            res.body.should.have.property('cep').eql(14406303);
						done();
				});
			})
    });
});
