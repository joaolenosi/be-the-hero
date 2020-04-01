/**
 * Arquivo responsável por definir todas as rotas do meu back-end
 * Author: João Leno
 * Data: 30/03/2020
 */
const express = require('express');

//Importa o meu arquivo OngController, dentro desse arquivo temos dois métodos: index e create
const ongController = require('./controllers/OngController');

const incidentController = require('./controllers/incidentController');
//Importando a minha rota profileController, onde definimos uma função index que dá o SELECT na table de incidents
const profileController  = require('./controllers/profileController');
const sessionController  = require('./controllers/sessionController');


//Desacomplando o módulo routes do express
const routes = express.Router();
/**
 * O método Router, requer que seja informado o tipo de requisição que será realizada. por exemplo: GET, POST, PUT, DELETE;
 * E recebe 2 parâmetros:
 * 1 - Nome da rota
 * 2 - Método que a rota deverá executar
 */


//Lista as informações da ONG
routes.get   ('/ongs', ongController.index); //SELECT
//Insere uma nova ONG
routes.post  ('/ongs', ongController.create); //INSERT INTO
//Efetua o login da ONG
routes.post  ('/session', sessionController.create);
//Lista todos os incidents da ONG logada
routes.get   ('/profile', profileController.index);
//Lista todos os incidentes, criando uma paginação
routes.get   ('/incidents',     incidentController.index);//SELECT * FROM incidents 
//Insere um novo incidente
routes.post  ('/incidents',     incidentController.create);//INSERT INTO
//Deleta um incidente
routes.delete('/incidents/:id', incidentController.delete);//DELETE Route   param

//Para que o index.js consiga enxergar essas rotas é necessário exportar as rotas.
module.exports = routes;