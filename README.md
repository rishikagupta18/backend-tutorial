# backend-tutorial

Node.js + Express + MongoDB Atlas (Mongoose) CRUD API.

## Setup

```bash
npm install
cp .env.example .env     # then put your Atlas DB user password in MONGODB_URI
npm run dev
```

## Structure

```
config/db.js                  MongoDB connection
models/User.js                Mongoose model
controllers/userController.js CRUD logic
routes/userRoutes.js          Route definitions
middleware/errorHandler.js    Central error handling
server.js                     App entry point
postman/                      Postman collection for testing
```

## API

| Method | Endpoint         | Description     |
|--------|------------------|-----------------|
| POST   | /api/users       | Create a user   |
| GET    | /api/users       | List all users  |
| GET    | /api/users/:id   | Get one user    |
| PUT    | /api/users/:id   | Update a user   |
| DELETE | /api/users/:id   | Delete a user   |

Body for POST/PUT: `{ "name": "Rishika", "email": "rishika@example.com", "age": 22 }`

## Testing with Postman

Import `postman/backend-tutorial.postman_collection.json`, or open the
"Backend Tutorial CRUD" collection in your Postman workspace. Run the server
first, then send the requests in order (Create saves `userId` automatically).
