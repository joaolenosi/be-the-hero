/**
 * Arquivo responsável pela as informações da ONG logada, deve ser enviada no cabeçalho da requisição.
 * Os SELECTS e INSERTS foram realizados com Query Builder.
 * Author: João Leno
 * Data: 30/03/2020
 */
const connection = require('../database/connection')


module.exports = {
    async index(request, response){
        //Obtém o parâmetro page que foi passado na url, senao for passado nenhum parâmetro o padrão será 1
        const {page = 1} = request.query;

        //Select para retornar a quantidade de incidents cadastrados.
        //Como esse select retorna vários registros,devemos pegar a primeira posiçaõ, ou colocado em forma de array
       //Opções: count[0] ou [count]
       //Lembre-se de colocar o await
        const [count] = await connection('incidents').count();
        

        console.log(count);

        const incidents = await connection('incidents')
                                //Fazendo o INNER JOIN
                                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                                .limit(5) //Retorna no máximo 5 incidentes
                                //Pula de 5 em 5 registros. Exempo: Page=1 (1-1)=0*5 = 0, então ele não pula nenhum registro 
                                //Na segunda interação. page=2 (2-1)=1*5=5 então ele pula 5 registros
                                .offset((page - 1) * 5) 
                                //Retorna todos os campos da tabela incident
                                .select([
                                    'incidents.*', 'ongs.name', 'ongs.email',
                                    'ongs.whatsapp', 'ongs.city', 'ongs.uf'
                                 ])
        //Envia no cabeçalho da resposta a quantidade de registros retornados no select acima.
        response.header('x-total-count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        //realiza um destructure pegando os dados da requisição.
        const {title, description, value} = request.body;
        //Pega o id da ONG que fez a requsição, o nome da variavel que guarda o id, é: authorization
        const ong_id = request.headers.authorization;

        //Insere um incident no banco de dados.
        //Foi feito um destructure pegando o id da transação que é o campo auto increment da nossa tabela.  
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id, 
        });

        //Ao enviar uma requisição o id da transação é retornado
        return response.json({id});


    },
    //Request parametros 
    //Resposa que será exibida
    async delete(request, response){
        
        const { id } = request.params;  //Route param, obtém o id que foi passado para deletar. Atenção: Sempre deverá ser usado operador destructuring {}
        const ong_id = request.headers.authorization; //Pega o id da ONG que fez a requsição, o nome da variavel que guarda o id, é: authorization

        //Da um select na tabela incidents pelo o id do registro
        const incident = await connection('incidents')
                               .where('id', id)
                               .select('ong_id')
                               .first();

        //Verifica se o id rertornado do select é diferente do da requisição.                               
        if (incident.ong_id != ong_id ){
            return response.status(401).json({error: 'Sorry, you are not permission!'});//Retorna uma mensage de acesso não autorizado
        }                
        
        await connection('incidents').where('id',id).delete();

        return response.status(204).send(); //Retorna o status 204, informando que a operação ocorreu com sucesso!
    }
}
