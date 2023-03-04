# API de usuários e filmes

Este é um projeto de API para gerenciamento de usuários e filmes, construído com NestJS e TypeORM. A API oferece operações CRUD (criação, leitura, atualização e deleção) para ambas as entidades, permitindo que os usuários criem e editem suas listas de filmes favoritos.

## Como executar

### Para executar a API, siga as etapas abaixo:

Clone este repositório em seu computador.

Instale as dependências do projeto usando o comando: 'yarn'.

Configure a conexão com o banco de dados no arquivo: '.env'.

Execute as migrações do banco de dados usando o comando 'yarn migration:run'.

Inicie o servidor com o comando 'yarn start'.

A API estará disponível em http://localhost:3000/api.docs.

## Endpoints

### A API oferece os seguintes endpoints:

### Users

GET /users: Retorna uma lista de todos os usuários cadastrados.
GET /users/:id: Retorna um usuário específico pelo seu ID.
POST /users: Cria um novo usuário.
PUT /users/:id: Atualiza um usuário existente.
DELETE /users/:id: Deleta um usuário existente.

### Movies

GET /movies: Retorna uma lista de todos os filmes cadastrados.
GET /movies/:id: Retorna um filme específico pelo seu ID.
POST /movies: Cria um novo filme.
PUT /movies/:id: Atualiza um filme existente.
DELETE /movies/:id: Deleta um filme existente.

### Contribuindo
Se você quiser contribuir para este projeto, fique à vontade para fazer um fork e enviar um pull request. Todas as contribuições são bem-vindas!