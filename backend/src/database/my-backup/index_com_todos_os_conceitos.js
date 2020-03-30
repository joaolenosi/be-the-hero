//importando o módulo express
const express = require('express');
//Criou o app
const app = express();

//Informa que nossas requisições o seu corpo deve ser convertido para json
app.use(express.json());

//Criando uma rota, como não tem o nome da página então só coloca uma barra, para informar que é 
//uma rota raiz. E o segundo parâmetro é uma função arrow que obrigatoriamente possui dois parâmetros
//O primeiro é a requisição e o segundo é a resposta. E na resposta foi retornado uma mensagem.
//Podemos retonar um JSON também

//O que vêm depois da barra é chamado de recurso e geralmente está associado a uma tabela.
/**
 * Métodos HTTP:
 * 
 * GET: buscar informações no backend; SELECT
 * POST: Criar uma informação no backend; INSERT
 * PUT: Alterar uma informação no backend; UPDATE
 * DELETE: Deletar uma informação no backend; DELETE
 */

 /**
  * Tipos de parâmetros
  * 
  * Query   params: parâmetros nomeados e enviados na rota após ?nome=joaoleo utilizado para filtros e paginação
  * Route   params: parâmetros utilizados para idetificar recursos = (Nome da pagina na url)  app.get('/users/:id', (request, response) retorna o usuário que possui aquele id
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

  /**
   * Existem dos tipos de conexão:
   * Driver: SELECT * FROM user
   * Query Builder: table('users').select('*').where()
   */


    //Para retornar um usuário especifico é necessario informar o parâmetro assim /users/:id
    //E la na requisição não digite o nome do parâmetro, apenas o número do id que você quer retornar.
    //A variavel request possui todos os parâmetros da requisição.

    app.post('/users', (request, response) =>{

        const body = request.body;
        console.log(body);
    
    //1º Query params:
    //app.get('/users', (request, response) =>{
    //para retornar todos os parâmetros é através do método query.
    //const params = request.query;
    //console.log(params);

    //2º Route params:
    //app.get('/users/:id', (request, response) =>{
    //Retornando os parâmetros utilizando route params.
    //const params = request.params;
    //console.log(params);


    //3º Request body:
    //app.post('/users', (request, response) =>{
    //Retornando os parâmetros utilizando request body
    //const body = request.body;
    //console.log(body);

   // return response.send('Hello Be The Hero');
   return response.json({
       evento: 'Semana Oministack 11.0',
       aluno: 'João Leno'
   })

})

//Ficou ouvindo a porta
app.listen(3334);