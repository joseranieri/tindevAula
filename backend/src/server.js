/**
 * Código do servidor, que irá capturar as requisicoes
 */

//chamando o Express, framework para server web
const express = require('express');

//instanciando o express
const server = express();

//gerando uma resposta via Get retornando um Hello World
server.get('/', (req, res) => {
    return res.send('Hello world guy');
});

//Startando o serviço escutando na porta 3333
server.listen(3333);