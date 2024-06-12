**Architecture Design with Database Token Storage High-Level Components** 

1. **Backend Application**: 
   1. NodeJS 
   1. ExpressJS (Web Framework) 
   1. PostgreSQL (Database) 
1. **Authentication Service**: 
- Nodemailer (For sending magic links/emails) 

**Detailed Architecture** 

1\.  **Backend Application**: 

- **Routes**: 
- **/(http://localhost:5027/auth/register)**: Endpoint for user signup. 
- **(http://localhost:5027/auth/verify?token=Token)**: Endpoint to verify the magic link. 
- **(http://localhost:5027/todo/)**: CRUD operations for todos (Create, Read, Update, Delete). 
- **Controllers**: 
- **Auth**: 
  - signup(req, res): Generates a magic link and sends  it via email. 
  - verify(req, res): Verifies the magic link and logs  in the user. 
- **Todo**: 
  - createTodo: Creates a new todo. 
  - getTodos: Retrieves all todos for the logged-in user. 
  - updateTodo: Updates an existing todo. 
  - deleteTodo: Deletes a todo. 
- **Models**: 
  - **User**: 
    - id: UUID 
    - email: String 
    - token:String
    - created_at
    - updated_at,
    - deleted_at
  - **Todo**: 
    - id: UUID 
    - userId: UUID (Foreign Key) 
    - title: String 
    - description: String 
    - completed: Boolean 
    - created_at
    - updated_at,
    - deleted_at

- **Middleware**: 
- **AuthMiddleware**: Middleware to protect todo routes and verify user authentication. 
- **Services**: 
  - **mailer**: Service to send emails using Nodemailer. 
  - **auth**: Service to generate, store, and verify tokens for magic  links. 

**Step-by-Step Breakdown** 

1. **Setup the Backend Application**: 
   1. Initialize a NodeJS project and install necessary dependencies (express, pg, nodemailer, jwt, etc.). 
   2. Setup the PostgreSQL database and create tables for users, todos,
2. **Create Models**: 
- Define the User and  Todo, in sql folder and init.sql
psql -U rajhans -d rishav -a -f sql/init.sql

  

1. **Implement Controllers**: 
   - **AuthController**: 
   - signup(req, res): Generate a token, save it to the database, and send a magic link to the user's email. 
   - verify(req, res): Verify the token from the magic  link against the database and log in the user. 
   - **TodoController**: 
   - Implement CRUD operations for todos. 
2. **Setup Routes**: 
   - Define routes for authentication and todos. 
   - Protect the todo routes using AuthMiddleware. 
3. **Implement Email Service**: 
   - Use Nodemailer to send emails with magic links. 


**Directory Structure**: 

- src 
  - controllers 
    - auth.js 
    - index.js
    - todo.js 
  - models 
    - auth.js 
    - todo.js 
  - router
    - auth.js 
    - index.js
    - todo.js 
  - services 
    - mailer.js 
    - auth.js 
  - middleware 
    - auth.js 
    - errorHandler.js
  - sql
    -init.sql
  - utils
    - CustomErrors.js
    - db.js
  - app.js 
  - server.js 
