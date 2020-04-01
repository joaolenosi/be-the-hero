/**
* Explicação: Temos uma rota chamada "Profile", que pode ser acessada por meio dessa url: http://localhost:3334/profile
* Quando método de resuição é GET, automaticamente é executado a minha função chamada index, que realiza a conexão com o banco de dados
* utilizando o "Query Builder", da um select na tabela ongs e retorna o JSON com todas as informações.
* A função index possui dos parâmetros:
* 1 - Request  - Serve para obter todas as informações da requisição. Ou seja, posso pegar os parâmetros ou as informações contidas no header.
* 2 - Response - Serve para retonar uma informação para quem o chamou.
* Author: João Leno
* Data: 30/03/2020
*/
//Classe responsável por controlar o perfil das ONGS
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
    	//Na nossa rota criada no programa Insomnia, definimos um header passando parâmetro o ID da empresa logada
    	//Para obter a informação do header, devemos utilizar o método request, para ler as informações da requisição.
        const ong_id = request.headers.authorization;


        //Lista os incidents com base no ID que foi passado na requisição.
        const incidents = await connection('incidents')
                                .where('ong_id', ong_id)
                                .select('*');
        //Retorna todos os incidentes da ong logada                        
        return response.json(incidents);
    }

}