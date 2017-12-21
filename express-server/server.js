var app = require('./config/express');

let env = process.env.NODE_ENV;
if(!env){
	env = 'development';
}

let config = require(`./config/config.${env}.json`);
require('./config/database')(`mongodb://${config.databaseConfig.host}/${config.databaseConfig.database}`);

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;
