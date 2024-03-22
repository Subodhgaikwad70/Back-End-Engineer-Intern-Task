# Back-End-Engineer-Intern-Task

This project is a RESTful API built with Node.js and Express for managing tokens. It includes CRUD (Create, Read, Update, Delete) operations for a Token model, which represents tokens with fields for token, price, volume, and timestamp.

Installation
Clone the repository:

```bash
git clone https://github.com/your-username/token-management-api.git
```

Install dependencies:

```bash
cd back-end-engineer-intern-task
npm install
```

Set up your MongoDB database and configure the connection in .env.

Start the server:

```bash
npm start
```
API Endpoints

- GET /tokens: Get all tokens
- GET /tokens/:id: Get a token by ID
- POST /tokens: Create a new token
- PUT /tokens/:id: Update a token by ID
- DELETE /tokens/:id: Delete a token by ID

Usage

You can use tools like Postman to interact with the API endpoints. Here's an example of how to create a new token using the POST /tokens endpoint:

```json
{
  "token": "BTC",
  "price": 55000,
  "volume": 1000
}
```
