//Importa o knex
const knex = require("knex");
const configuration = require('../../knexfile');

//Passando como padrão de conexão, a de desenvolvimento
const connection = knex(configuration.development);

//Exportando a conexão
module.exports = connection;