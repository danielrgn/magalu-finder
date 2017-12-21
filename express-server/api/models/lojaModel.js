var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Schema = new Schema({
  codigoFilial : {
    type: Number,
    required: true
  },
  nomeLoja : {
    type: String,
    required: true
  },
  cep : {
    type: Number,
    required: true
  },
  localizacao: {
      type: { type: String }
    , coordinates: []
  },
  dataAdc: {
      type: Date,
      default: Date.now
  }
});

Schema.index({ localizacao: '2dsphere' });

mongoose.model('Loja', Schema);
