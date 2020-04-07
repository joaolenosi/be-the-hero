# be-the-hero
O projeto **Be the Hero** foi desenolvido na semana OmniStack 11.0, ministrada por Diego Schell Fernandes - Co-founder & CTO - Rocketseat.
O projeto tem como objetivo principal conectar **ONGs** a **pessoas** com intenção de ajudar em causas nobres.


O projeto foi segmentado em 3 camadas:

* **Backend**: Node.js, Express, cross-env, cors
* **Frontend**: React, Axios
* **Mobile**: React Native, Expo
* **Databse**: SQLite, Knex
* **Validações**: Celebrate, Jest  

# <h2> Detalhes do backend
Foi desenvolvida uma API RESTful usando Node.js, Express, e um módulo de segurança Cors. O Express é um framework Node, ele cria abstrações de rotas, middlewares e facilita a criaçao de API's. A API foi integrada com o banco de dados SQLite através do package Knex, que permite a criação de consultas e demais operações SQL utilizando o Query Builder, desta forma dando uma flexibilidade maior ao nosso projeto, caso seja necerrário migrar de banco de dados; 

Para testar as rotas inicialmente foi criado as requisições HTTP no software Insomnia, utilizando os **3** tipos de parâmetros:
* **Query   params**: parâmetros nomeados e enviados na rota após ?nome=joaoleo utilizado para filtros e paginação
* **Route   params**: parâmetros utilizados para idetificar recursos;
* **Request body**: Corpo da requisição, utilizado para criar ou alterar recursos 
  
E os testes finais de **integração** e **unitário** foram realizados com a biblioteca **Supertest**.


# <h2> Detalhes do mobile
O App foi desenvolvido utilizando o Expo e o React Native em conjunto com o pacote axios responsável por permitir a criação de requisições http ao backend. O aplicativo permitie a interação do usuário de forma direta com as ONG´s atavés do whats app usando o deep link para abertura do app, ou envio de e-mail utilizando o pacote expo-mail-composer.

# <h2> Sobre o autor
Olá, meu nome é: João leno, sou formado em Sistemas de Informação pela a Faculdade de Ciências e Tecnologia Mater Christi. Apaixonado por tecnologia e adoro desafios. Atualmente trabalho com desenvolvimento de software para automação comercial e aplicações web. Já programei em diversas linguagens de programaçao, entre elas: Java / Android, Object Pascal (Delphi), PHP, Javascript, Python e C.
Já trabalhei com os seguintes SGBD´s: SQL Server, Postgres, Oracle, Interbase, Firebird, SQLite e Mysql. Utilizando o SQL (Struct Query Language) para realizar as transações no banco de dados.

No momento estou aprendendo Node.js, React e React Native.

