const crypto   = require('crypto');
//Desacomplando o módulo routes do express
const connection = require('../database/connection');

//Os métodos que serão exportados deverão ser separados por vírgula
module.exports = {

    //Lista os dados da tabela, o nome do método é index;
    async index(request, response){
        const  ongs = await connection('ongs').select('*');//SELECT 
          return response.json(ongs);
    },


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