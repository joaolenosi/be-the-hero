/**
 * Arquivo responsável por definir todas as rotas do meu backend
 * Author: João Leno
 * Data: 30/03/2020
 */
const express = require('express');

//Controller resposável por conter todas as funções 
const ongController = require('./controllers/OngController');

const incidentController = require('./controllers/incidentController');
const profileController  = require('./controllers/profileController');
const sessionController  = require('./controllers/sessionController');


//Desacomplando o módulo routes do express
const routes = express.Router();

//Rota para listar todas as ongs cadastradas
//routes.get('/ongs', async (request, response) => {
//  const  ongs = await connection('ongs').select('*');
//    return response.json(ongs);
//});

//routes.post('/ongs', async (request, response) =>{
//   const {name, email, whatsapp, city, uf} = request.body;
//    const id = crypto.randomBytes(4).toString('HEX');
//    await connection('ongs').insert({
//        id,
//        name,
//        email,
//        whatsapp,
//        city,
//        uf,
//    });
//    return response.json({ id })
//});

//https://github.com/jbdevelop/be-the-hero/blob/master/back/src/index.js

routes.get   ('/ongs', ongController.index); //SELECT
routes.post  ('/ongs', ongController.create); //INSERT INTO

routes.post  ('/session', sessionController.create);

routes.get   ('/profile', profileController.index);//Lista todos os incidents da ONG logada

routes.get   ('/incidents',     incidentController.index);//SELECT
routes.post  ('/incidents',     incidentController.create);//INSERT INTO
routes.delete('/incidents/:id', incidentController.delete);//DELETE Route   param

//Para que o index.js consiga enxergar essas rotas é necessário exportar as rotas.
module.exports = routes;