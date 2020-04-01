/**
* Explicação: Temos uma rota chamada ongs, que pode ser acessada por meio dessa url: http://localhost:3334/ongs
* Quando método de resuição é GET, automaticamente é executado a minha função chaada index, que realiza a conexão com o banco de dados
* utilizando o "Query Builder", da um select na tabela ongs e retorna o JSON com todas as informações.
* Todas as funções tem dois parâmetros:
* 1 - Request  - Serve para obter todas as informações da requisição
* 2 - Response - Serve para retonar uma informação para quem o chamou.
* Author: João Leno
* Data: 30/03/2020
*/
const crypto   = require('crypto');
const connection = require('../database/connection');
//Os métodos que serão exportados deverão ser separados por vírgula
module.exports = {

    //Lista toodos os dados da tabela ONG, o nome do método é index;
    //SELECT  * FROM ongs
    async index(request, response){
        const  ongs = await connection('ongs').select('*')
          return response.json(ongs);
    },

    //Da um insert na tabela ONG
    async create(request, response){
         //Fazer o uso do objeto destructuring, para obter cada parâmetro separado.
        const {name, email, whatsapp, city, uf} = request.body;

        //Cria um id com 4 bytes aleatórios e converte para hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');
        //Para inserir um dado, passa a instância da conexão, o nome da tabela e os atributos que serão inseridos.
        //Como o insert pode demorar um pouco e eu preciso retornar que essa ong foi inserida
        //Após executar o insert, se houver erro:"SQLITE_ERROR: no such table: ongs", delete o banco manualmente e execute novamente o comando: npx knex migrate:latest para ele recriar todas as tabelas
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        //Esse código só será executado após o insert ser concluído, o motivo da pause é async na função
        //E o await é o que faz esperar.
        return response.json({ id })
    }
};