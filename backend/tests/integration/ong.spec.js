//Pacote para realizar requisições HTTP de teste.
const request = require('supertest');
//Importa o app que contém as configurações do servidor.
const app = require('../../src/app');
//Importando o arquivo de conexão.
const connection = require('../../src/database/connection');

describe('ONG', () => {
    //Antes de cada um dos testes, executa nossas migrations
    beforeEach(async () => {
        await connection.migrate.rollback();//Zera o banco de dados
        await connection.migrate.latest();//Cria o banco de dados
    });

    //Destroy a conexão após todos os testes serem concluídos.
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        //Realiza uma requisição a rota ongs, passando como parâmetro os campos que compõem a tabela.
        //Método de requisição POST utilizando o async e await para garantir que o código que valida
        //seja execcutado, somente após a requisição ser concluída.
        const response = await request(app).post('/ongs').send({
            name: "APAD2",
	        email: "contato@teste.com",
	        whatsapp: "2137553727",
	        city: "Duque de Caxias",
	        uf: "RJ"
        });

        

        //Espera que como resposta do insert, exista um ID
        expect(response.body).toHaveProperty('id');
        //Checa se o ID tem 8 caracteres.
        expect(response.body.id).toHaveLength(8);

        console.log(response.body.id);
    });
});