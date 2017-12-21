Magalu-Finder
=================

O Magalu-Finder é uma aplicação que ajuda os clientes do Magalu a encontrarem as lojas mais próximas, cujo os produtos desejados pelo cliente, sejam exibidos pra ele.

Como fazer o Build utilizando Docker
---------------

Será necessário ter instalado em sua máquina o [Docker](https://www.docker.com/) juntamente com o [Docker Compose](https://docs.docker.com/compose/). 

Ao fazer o download do projeto, entre na pasta "express-server", e execute o seguinte comando dentro do terminal do docker:

    $ docker build -t express-server:dev .

Depois entre na pasta "angular-client", e execute o seguinte comando dentro do terminal do docker:

    $ docker build -t angular-client:dev .

Pronto, agora que construímos as nossas imagens, podemos executar o docker-compose:

    $ docker-compose up

Após esses procedimentos, entre em um navegador e digite a url: http://localhost:4200 para acessar a aplicação.

Como fazer o Build sem o Docker
---------------

### NodeJS

Será necessário ter instaldo em sua máquina o [NODEJS](https://nodejs.org/en/) (versão >= 6.11.4) e o NPM (versão >= 3.10.10).

Ao fazer o download do projeto, entre na pasta "express-server", e execute o seguinte comando dentro do terminal:

    $ npm install
    $ npm start

Depois entre na pasta "angular-client", e execute o mesmo comando anterior.

### MongoDB

Como banco de dados, a aplicação utiliza o MongoDB, que é necessário também estar instalado em sua máquina, caso não tenha, [clique aqui](https://docs.mongodb.com/getting-started/shell/installation/) e faça a instalação. 
Após instalado, entre no terminal, e execute o mongo:

    $ mongod

Após esses procedimentos, entre em um navegador e digite a url: http://localhost:4200 para acessar a aplicação.




