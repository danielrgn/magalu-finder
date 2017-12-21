module.exports = function(uri){

  var mongoose = require('mongoose');

  mongoose.connect(uri);

  mongoose.connection.on('connected', () => {
    console.log('Conectado ao MongoDB');
  });

  mongoose.connection.on('error', (e) => {
    console.log('Erro na Conexão ' + e);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Desconectado do MongoDB');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close( () => {
      console.log('Conexão fechada pelo término da aplicação');
      process.exit(0);
    });
  });

}
