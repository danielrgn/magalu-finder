var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Schema = new Schema({
  codigoProduto : {
    type: String,
    required: 'O campo Codigo Produto é obrigatório'
  },
  idLoja : {
    type: Schema.Types.ObjectId,
    required: 'O campo idLoja é obrigatório'
  },
  nomeProduto : {
    type: String,
    required: 'O campo Nome Produto é obrigatório'
  },
  valor : {
    type: Number,
    required: 'O campo Valor é obrigatório'
  }
});

mongoose.model('Produto', Schema);
