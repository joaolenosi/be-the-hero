/**
 * Arquivo responsável por definir todas as rotas do meu back-end. 
 * Todos os componentes e rotas devem ser criados com a primeira letra em maiúsculo.
 * Author: João Leno
 * Data: 30/03/2020
 */
const express = require('express');
//Pacote para realizar validações nos campos
const { celebrate, Segments, Joi } = require('celebrate');
//Importa o meu arquivo OngController, dentro desse arquivo temos dois métodos: index e create
const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/incidentController');
//Importando a minha rota profileController, onde definimos uma função index que dá o SELECT na table de incidents
const ProfileController  = require('./controllers/profileController');
const SessionController  = require('./controllers/sessionController');


//Desacomplando o módulo routes do express
const routes = express.Router();
/**
 * O método Router, requer que seja informado o tipo de requisição que será realizada. por exemplo: GET, POST, PUT, DELETE;
 * E recebe 2 parâmetros:
 * 1 - Nome da rota
 * 2 - Método que a rota deverá executar
 */


//Lista as informações da ONG.

routes.get('/ongs', OngController.index); //SELECT


//Insere uma nova ONG
//Os colhetes é para informar que é uma variavel do JS
//Para realizar uma validação usando o celebrate é necesário informar o tipo de parâmetros utilizado na rota.
//Na rota da ONGS, enviamos as informações para serem inseridas no body da requisição.
//A validação de ser sempre antes do método que realiza a chamada.
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name:     Joi.string().required(), //Campo Obrigatório
        email:    Joi.string().required().email(),  //Campo Obrigatório e valida o e-mail
        whatsapp: Joi.string().required().min(10).max(11), //Obrigatório com o tamanho mínimo e máximo
        city:     Joi.string().required(),
        uf:       Joi.string().required().length(2),//Obrigatório com um tamanho máximo de 2 caracteres
    })
}), OngController.create);//INSERT INTO


//Efetua o login da ONG
routes.post  ('/session', SessionController.create);

//A rota profile, lista todos os incidents da ONG que está logada.
//Verifica se o parâmetro authorization que é passado no header da requisição está preenchido.
routes.get   ('/profile', 
 celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

//Lista todos os incidentes, criando uma paginação
routes.get('/incidents', 
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        })
    }),   
IncidentController.index);//SELECT * FROM incidents 


//Insere um novo incidente
routes.post  ('/incidents',     IncidentController.create);//INSERT INTO

//Deleta um incidente
//A validação dessa rota é a nível de parâmetro, checa se o id que foi passado por parâmetro é um número
routes.delete('/incidents/:id', 
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        })
    }), 
IncidentController.delete);//DELETE Route   param

//Para que o index.js consiga enxergar essas rotas é necessário exportar as rotas.
module.exports = routes;