//Classe responsável por controlar o perfil das ONGS
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;
        //Retorna todos os incidentes da ong logada
        const incidents = await connection('incidents')
                                .where('ong_id', ong_id)
                                .select('*');
        return response.json(incidents);
    }

}