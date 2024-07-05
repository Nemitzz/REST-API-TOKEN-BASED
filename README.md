# REST API Documentation

## English

---

### API REST

A simple and efficient API with token-based login/registration and person registration.

## Index

1. [Instalation](#instalation)
2. [Config](#config)
3. [Usage](#usage)
4. [API Routes](#api-routes)

   - **ITEMS**
   - [GET /items](#get-items)
   - [GET /items:id](#get-itemsid)
   - [POST /items](#post-items)
   - [PUT /items/:id](#put-items)
   - [DELETE /items:id](#delete-items)

   - **USERS**
   - [POST /users](#post-users)
   - [PUT /users](#put-users)
   - [DELETE /users](#delete-users)

   - **Photos**
   - [POST /photos](#post-photos)

   - **Token**
   - [POST /tokens](#post-tokens)

   - **HOME**
   - [GET /](#get-home)

## Instalation

Instructions for downloading the repository and installing the API dependencies.

In your terminal (VSCode, GIT Bash, Windows Terminal, etc.):
- Clone the repository: `git clone <repository_url>`
- Go to the cloned repository folder:  `cd your_folder_name`
- Install the dependencies: `npm install`

## Configuration

Instructions on how to properly configure the environment.

- Create a `.env` file in the project root and add the following variables
```env
  DATABASE=YOUR_DATABASE
  DATABASE_HOST=YOUR_DATABASE_HOST
  DATABASE_PORT=YOUR_DATABASE_PORT
  DATABASE_USERNAME=YOUR_DATABASE_USERNAME
  DATABASE_PASSWORD=YOUR_DATABASE_PASSWORD
  SECRET_TOKEN=YOUR_SECRET_TOKEN
```
- Run a migration of the tables using the command: `npx sequelize-cli db:migrate`

## Usage

Instructions on how to run the application locally.

In your terminal (VSCode, GIT Bash, Windows Terminal, etc.):
- Run the following command: `npm run dev`

## API Routes

Explanation of how the routes work.

 - **GET /items**

   Returns a list of all cataloged Items

   **Exemple (using Insomnia):**

   Response:
```Json
  [
    {
      "id": 1,
      "name": "Item 1",
      "lastname": "Item 1",
      "email": "Item1@email.com",
      "age": "age",
      "weight": "weight",
      "height": "height",
      "originalname": "original name of the image",
      "filename": "generated name of the image",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **GET /items/:id**

    RReturns the item specified by :id in the URL.

    **Exemple (using Insomnia):**

    Response:
```Json
  [
    {
      "id": 1,
      "name": "Item 1",
      "lastname": "Item 1",
      "email": "Item1@email.com",
      "age": "age",
      "weight": "weight",
      "height": "height",
      "originalname": "original name of the image",
      "filename": "generated name of the image",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **POST /items**

    Creates a new item.

    **Exemple (using Insomnia):**

    Request body:
```Json
{
      "name": "Item #",
      "lastname": "Item #",
      "email": "Item#@email.com",
      "age": "age",
      "weight": "weight",
      "height": "height"
}
```
    Response:
```Json
  [
    {
      "id": "#",
      "name": "Item #",
      "lastname": "Item #",
      "email": "Item1@email.com",
      "age": "age",
      "weight": "weight",
      "height": "height",
      "originalname": "original name of the image",
      "filename": "generated name of the image",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **PUT /items/:id**

    Updates an existing item by `:id` in the URL.

    **Exemple (using Insomnia):**

    Request body:
```Json
{
      "name": "Updated Item 1",
      "lastname": "Updated Item 1",
      "email": "Item1updated@email.com",
      "age": "age",
      "weight": "weight",
      "height": "height"
}
```
    Response:
```Json
  [
    {
      "id": "1",
      "name": "Updated Item 1",
      "lastname": "Updated Item 1",
      "email": "Item1updated@email.com",
      "age": "age",
      "weight": "weight",
      "height": "height",
      "photo": "photo_link",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **DELETE items/:id**

    Deletes an existing item by `:id` in the URL.

    **Exemple (using Insomnia):**

    Response:
```Json
{
  "deleted": "true"
}
```

  - **POST /users**

    Creates a new user.

    **Exemple (using Insomnia):**

    Request body:
```Json
{
  "name": "name",
  "email": "email",
  "password": "password"
}
```

    Response:
```Json
{
  "id": "#",
  "name": "name",
  "email": "email",
  "password": "password"
}
```

  - **PUT /users:id**

    Edits an existing user by `:id` in the URL.

    **Exemple (using Insomnia):**

    Request body:
```Json
{
  "name": "updated_name",
  "email": "email",
  "password": "password"
}
```

    Response:
```Json
{
  "id": "#",
  "name": "updated_name",
  "email": "email",
  "password": "password"
}
```

  - **DELETE users/:id**

    Deletes an existing user by `:id` in the URL.

    **Exemple (using Insomnia):**

    Response:
```Json
{
  "deleted": "true"
}
```

  - **POST /photos**

    Uploads an image with a random and unique name and links it to the specified user in the URL.

    **Exemple (using Insomnia):**

    Response:
```Json
{
  "originalname":"original name of the image",
  "filename":"random and unique generated name",
  "item_id":"id of the item linked to the photo"
}
```

  - **POST /tokens**

    Logs in the user and generates an authorization token.
    This token is required to create and edit cataloged Items.

    **Exemple (using Insomnia):**

    Request body:
```Json
{
  "email":"emailcreatedinusersroute@email.com",
  "password":"correspondingpassword"
}
```

    Response:
```Json
{
  "token":"token_generated_by_JWT"
}
```
    In Insomnia, the token is inserted in the Header tab.

  - **GET /**

    Shows the Home page

    **Exemple (using Insomnia):**

    Response:
```Json
{
  "index"
}
```

## Extras

- The application has `login_required` middlewares, which make certain actions require an authorization token to be performed.

- All tests were done using [Insomnia](https://insomnia.rest/)

- This is a project from the course I am taking on Udemy, with professor Luiz Otávio Miranda:  [Javascript Course](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNING)



## PORTUGUÊS

---

### API REST
Uma API simples e eficiente com logins/registros por tokens e cadastro de pessoas.

## Índice

1. [Instalação](#instalação)
2. [Configuração](#configuração)
3. [Uso](#uso)
4. [Rotas da API](#rotas-da-api)

   - **ITEMS**
   - [GET /items](#get-items)
   - [GET /items:id](#get-itemsid)
   - [POST /items](#post-items)
   - [PUT /items/:id](#put-items)
   - [DELETE /items:id](#delete-items)

   - **USERS**
   - [POST /users](#post-users)
   - [PUT /users](#put-users)
   - [DELETE /users](#delete-users)

   - **Photos**
   - [POST /photos](#post-photos)

   - **Token**
   - [POST /tokens](#post-tokens)

   - **HOME**
   - [GET /](#get-home)

## Instalação

Instruções para baixar o repositório e instalar as dependências da API.

No seu terminal (VSCode, GIT Bash, Terminal Windows, etc.):
- Clone o repositório: `git clone: <URL do repositório> `
- Acesse a pasta do repositório clonado: `cd your_folder_name`
- Instale as dependências: `npm install`

## Configuração

Instruções de como configurar corretamente o ambiente.

- Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```env
  DATABASE=SUA_DATABASE
  DATABASE_HOST=SUA_DATABASE_HOST
  DATABASE_PORT=SUA_DATABASE_PORT
  DATABASE_USERNAME=SUA_DATABASE_USERNAME
  DATABASE_PASSWORD=SUA_DATABASE_PASSWORD
  SECRET_TOKEN=SUASECRETTOKEN
```
- Faça uma migração das tabelas usando o comando: `npx sequelize-cli db:migrate`

## Uso

Instrução de como rodar a aplicação localmente.

No seu terminal (VSCode, GIT Bash, Terminal Windows, etc.):
- Digite o seguinte comando: `npm run dev`

## Rotas da API

Explicação de como funcionam as rotas.

 - **GET /items**

   Retorna uma lista de todos os Items catalogados.

   **Exemplo (usando Insomnia):**

   Resposta:
```Json
  [
    {
      "id": 1,
      "name": "Item 1",
      "lastname": "Item 1",
      "email": "Item1@email.com",
      "age": "idade",
      "weight": "peso",
      "height": "altura",
      "originalname": "nome original da imagem",
      "filename": "nome gerado da imagem",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **GET /items/:id**

    Retorna o item especificado pelo `:id` na URL.

    **Exemplo (usando Insomnia):**

    Resposta:
```Json
  [
    {
      "id": 1,
      "name": "Item 1",
      "lastname": "Item 1",
      "email": "Item1@email.com",
      "age": "age",
      "weight": "weight",
      "height": "height",
      "originalname": "nome original da imagem",
      "filename": "nome gerado da imagem",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **POST /items**

    Cria um novo item.

    **Exemplo (usando Insomnia):**

    Corpo da requisição:
```Json
{
      "name": "Item #",
      "lastname": "Item #",
      "email": "Item#@email.com",
      "age": "idade",
      "weight": "peso",
      "height": "altura"
}
```
    Resposta:
```Json
  [
    {
      "id": "#",
      "name": "Item #",
      "lastname": "Item #",
      "email": "Item1@email.com",
      "age": "idade",
      "weight": "peso",
      "height": "altura",
      "originalname": "nome original da imagem",
      "filename": "nome gerado da imagem",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **PUT /items/:id**

    Atualiza um item existente pelo `:id` na URL.

    **Exemplo (usando Insomnia):**

    Corpo da requisição:
```Json
{
      "name": "Item 1 atualizado",
      "lastname": "Item 1 atualizado",
      "email": "Item1atualizado@email.com",
      "age": "idade",
      "weight": "peso",
      "height": "altura"
}
```
    Resposta:
```Json
  [
    {
      "id": "1",
      "name": "Item 1 atualizado",
      "lastname": "Item 1 atualizado",
      "email": "Item1atualizado@email.com",
      "age": "idade",
      "weight": "peso",
      "height": "altura",
      "originalname": "nome original da imagem",
      "filename": "nome gerado da imagem",
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    },
    ...
  ]
```

  - **DELETE items/:id**

    Delete um item existente pelo `:id` na URL.

    Resposta:
```Json
{
  "deleted": "true"
}
```

  - **POST /users**

    Cria um novo usuário.

    **Exemplo (usando Insomnia):**

    Corpo da requisição:
```Json
{
  "name": "name",
  "email": "email",
  "password": "password"
}
```

    Resposta:
```Json
{
  "id": "#",
  "name": "name",
  "email": "email",
  "password": "password"
}
```

  - **PUT /users:id**

    Edita um usuário existente pelo `:id` na URL.

    **Exemplo (usando Insomnia):**

    Corpo da requisição:
```Json
{
  "name": "name_alterado",
  "email": "email",
  "password": "password"
}
```

    Resposta:
```Json
{
  "id": "#",
  "name": "name_alterado",
  "email": "email",
  "password": "password"
}
```

  - **DELETE users/:id**

    Delete um usuário existente pelo `:id` na URL.

    **Exemplo (usando Insomnia):**

    Resposta:
```Json
{
  "deleted": "true"
}
```

  - **POST /photos**

    Envia uma imagem com nome aleatório e único e à liga com o usuário especificado na URL.

    **Exemplo (usando Insomnia):**

    Resposta:
```Json
{
  "originalname":"nome original da imagem",
  "filename":"nome gerado aleatório e único",
  "item_id":"id do item ligado à foto"
}
```

  - **POST /tokens**

    Loga o usuário e gera um token de autorização.
    Esse token é necessário para criar e editar Items catalogados.

    **Exemplo (usando Insomnia):**

    Corpo da requisição:
```Json
{
  "email":"emailcriadonarotausers@email.com",
  "password":"senhacorrespondente"
}
```
    Resposta:
```Json
{
  "token":"token_gerado_por_JWT"
}
```
    No Insomnia, o token é inserido na aba Header.

  - **GET /**

    Mostra a Home page.

    **Exemplo (usando Insomnia):**

    Resposta:
```Json
{
  "index"
}
```


## Extras

- A aplicação possui middlewared de `login_required`, fazendo com que certas ações necessitem de um token de autorização para serem realizadas.

- Todos os testes foram feitos usando [Insomnia](https://insomnia.rest/)

- Este é um projeto do curso que estou fazendo na Udemy, com o professor Luiz Otávio Miranda: [Curso Javascript](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNING)
