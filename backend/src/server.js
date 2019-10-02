/**
 * Código do servidor, que irá capturar as requisicoes
 */

//chamando o Express, framework para server web
const express = require('express');
const routes = require('./routes');

//instanciando o express
const server = express();
server.use(express.json());

server.use(routes);
//Startando o serviço escutando na porta 3333
server.listen(3333);