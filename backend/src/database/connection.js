//Importa o knex
const knex = require("knex");
const configuration = require('../../knexfile');

//Criamos uma variável de ambiente chamada: NODE_ENV dentro do package.json
//Se a variável estiver setada como teste, configura o banco de dados para o ambiente teste.
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

//Passando como padrão de conexão, a de desenvolvimento
const connection = knex(config);

//Exportando a conexão
module.exports = connection;