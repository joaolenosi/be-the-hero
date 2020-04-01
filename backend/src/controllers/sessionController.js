const connection = require('../database/connection')

 module.exports = {
    async create(request, response) {
        // Request body: Obtém o código da ONG que foi digitado para efetuar o login
        const { id } = request.body;
        
        
        const ong = await connection('ongs')
                        .where('id', id)
                        .select('name')
                        .first()

        //Se a ong não existir retorna o código do bad request                        
        if (!ong) {
             return response.status(400).json({ Error: 'Sorry, ONG not fount!!' })
        }

        return response.json(ong)
    }
 }