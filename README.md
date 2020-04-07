# be-the-hero
O projeto **Be the Hero** foi desenolvido na semana OmniStack 11.0, ministrada por Diego Schell Fernandes - Co-founder & CTO - Rocketseat.
O projeto tem como objetivo principal conectar **ONGs** a **pessoas** com intenção de ajudar em causas nobres.


O projeto foi segmentado em 3 camadas:

* Backend: Node.js, Express, cross-env, cors
* Frontend: React, Axios
* Mobile: React Native, Expo
* Databse: SQLite, Knex

# <h2> Dependências de validações
* Celebrate 
* Jest
# <h2> Dependências de testes
* Supertest   

# <h2> Detalhes do backend
Foi desenvolvida uma API RESTful usando Node.js, Express, e um módulo de segurança Cors. O Express é um framework Node, ele cria abstrações de rotas, middlewares e facilita a criaçao de API's. A API foi integrada com o banco de dados SQLite através do package Knex, que permite a criação de consultas e demais operações SQL utilizando o Query Builder, desta forma dando uma flexibilidade maior ao nosso projeto, caso seja necerrário migrar de banco de dados; 

Para testar as rotas inicialmente foi criado as requisições HTTP no software Insomnia, utilizando os **3** tipos de parâmetros:
* **Query   params**: parâmetros nomeados e enviados na rota após ?nome=joaoleo utilizado para filtros e paginação
* **Route   params**: parâmetros utilizados para idetificar recursos;
* **Request body**: Corpo da requisição, utilizado para criar ou alterar recursos 
  
  
  


Structure with SQLite, RESTful API using Node.js.
Frontend

React website where NGOs can signup and add cases that need help.
