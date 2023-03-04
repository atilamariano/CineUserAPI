# API utilizando NestJS, TypeORM e Token

Este projeto é uma API desenvolvida utilizando as tecnologias **NestJS** e **TypeORM**, além de autenticação por token. 

A API foi criada para ser uma solução backend escalável e de fácil manutenção.

## Como utilizar

Para utilizar a API, siga as instruções abaixo:

1. Clone o repositório: `git clone https://github.com/atilamariano/CineUserAPI`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```
DATABASE_URL=
DB_DATABASE=
DB_HOST=
DB_PASSWORD=
DB_PORT=
DB_USER=
DB_CONNECTION=
JWT_SECRET_KEY=
```

4. Rode as migrações do banco de dados: `npm run typeorm migration:run`
5. Inicie o servidor: `npm run start:dev`

Pronto! A API está funcionando e pronta para ser utilizada.

## Endpoints

A API possui os seguintes endpoints:

### POST /auth/login

Realiza o login de um usuário.

#### Parâmetros

| Nome       | Tipo   | Descrição            |
|------------|--------|----------------------|
| email      | string | Email do usuário     |
| password   | string | Senha do usuário      |

#### Resposta

Caso as credenciais sejam válidas, a API retorna um token de autenticação:

```json
{
  "token": "token_gerado_pela_api"
}
```

Caso as credenciais sejam inválidas, a API retorna o seguinte erro:

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### GET /users

Retorna a lista de todos os usuários cadastrados.

#### Resposta

```json
[
  {
    "id": 1,
    "name": "Fulano",
    "email": "fulano@exemplo.com"
  },
  {
    "id": 2,
    "name": "Ciclano",
    "email": "ciclano@exemplo.com"
  }
]
```

### GET /users/:id

Retorna os dados de um usuário específico.

#### Parâmetros

| Nome | Tipo | Descrição          |
|------|------|--------------------|
| id   | int  | ID do usuário desejado |

#### Resposta

```json
{
  "id": 1,
  "name": "Fulano",
  "email": "fulano@exemplo.com"
}
```

### POST /users

Cadastra um novo usuário.

#### Parâmetros

| Nome     | Tipo   | Descrição           |
|----------|--------|---------------------|
| name     | string | Nome do usuário     |
| email    | string | Email do usuário    |
| password | string | Senha do usuário     |

#### Resposta

```json
{
  "id": 1,
  "name": "Fulano",
  "email": "fulano@exemplo.com"
}
```

## Tecnologias utilizadas

- NestJS
- TypeORM
- PostgreSQL
- JWT


### Projeto criado apenas para estudos,  Autor: Átila Mariano Dev.
