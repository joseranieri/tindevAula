/**
 * Código do servidor, que irá capturar as requisicoes
 */

//chamando o Express, framework para server web
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//instanciando o express
const server = express();
server.use(express.json());
//conectando com o banco
mongoose.connect('mongodb+srv://tindev:tindev@cluster0-4mjmc.mongodb.net/tindev?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

server.use(routes);
//Startando o serviço escutando na porta 3333
server.listen(3333);