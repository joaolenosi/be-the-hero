//importando o módulo express
const express = require('express');
//Importando o módulo de segurança
const cors   = require('cors');
//Como esse arquivo routes foi eu que criei, é necessário colocar o ./ para dizer que está na mesma pasta.
const routes  = require('./routes');
//Criou o app
const app = express();

//Faz com que apenas um deterinado domínio possa usar nossa api
app.use(cors());

//Informa que nossas requisições o seu corpo deve ser convertido para json
app.use(express.json());
//Faz uso das rotas que foram criadas no outro arquivo.
app.use(routes);


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



//Ficou ouvindo a porta
app.listen(3334);