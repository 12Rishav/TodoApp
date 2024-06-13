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
  - **(http://localhost:5030/auth/register)**: Endpoint for user signup. 
  - **(http://localhost:5030/auth/verify?token=Token)**: Endpoint to verify the magic link. 
  - **(http://localhost:5030/todo/)**: CRUD operations for todos (Create, Read, Update, Delete). 
- **Controllers**: 
  - **Auth**: 
    - registerUser(req, res): Generates a magic link and sends  it via email. 
    - loginUser(req, res): Generates a magic link and sends  it via email.
    - verifyUser(req, res): Verifies the magic link and logs  in the user. 
  - **Todo**: 
    - addTodo: Creates a new todo. 
    - listTodos: Retrieves all todos for the logged-in user. 
    -  editTodo: Updates an existing todo. 
    - removeTodo: Deletes a todo. 
- **Models**: 
  - **User**: 
    - id: Int 
    - email: String 
    - token:String
    - created_at
    - updated_at,
    - deleted_at
  - **Todo**: 
    - id: Int 
    - userId: Int (Foreign Key) 
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

  

3. **Implement Controllers**: 
   - **AuthController**: 
     - signup(req, res): Generate a token, save it to the database, and send a magic link to the user's email. 
     - verify(req, res): Verify the token from the magic  link against the database and log in the user. 
   - **TodoController**: 
     - Implement CRUD operations for todos. 
4. **Setup Routes**: 
   - Define routes for authentication and todos. 
   - Protect the todo routes using AuthMiddleware. 
5. **Implement Email Service**: 
   - Use Nodemailer to send emails with magic links. 


**Directory Structure**: 

- ToDo-APP
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
  - swagger
    - swaggerComponents.js
    - swaggerdefinition.js
    - swaggeroptions.js
  - utils
    - CustomErrors.js
    - db.js
  - app.js 
  - server.js 

**How to Run?** 
1. **Install Dependancies**: 
   1. npm -i --legacy-peer-deps
2. **Start Node Application**
   1. npm start
3. **Serving Swagger Docs on**
   1. {Base Url}/api-docs
   2. Dependencies 
      - swagger-jsdoc
      - swagger-ui-express
   3. Maintain the url in swagger definition files 




   **DOT ENV FILE**
    1. DATABASE_URL
    2. JWT_SECRET
    3. EMAIL_HOST
    4. EMAIL_PORT
    5. EMAIL_USER
    6. EMAIL_PASS
    7. PORT


**For testing purpose pasting here my .env file**
  1. DATABASE_URL=postgres://rajhans:rishav@localhost:5432/todoApp
  2. JWT_SECRET=RishavKuamr123456789
  3. EMAIL_HOST=smtp.gmail.com
  4. EMAIL_PORT=587
  5. EMAIL_USER=kr911335@gmail.com
  6. EMAIL_PASS=oghr snkv uxdr rona
  7. PORT=5030
