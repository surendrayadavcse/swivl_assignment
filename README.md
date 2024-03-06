# swivl_assignment

Recipe Sharing Platform API
This backend API is developed for a recipe sharing platform, allowing users to perform CRUD operations on recipes. The API is built using Node.js, Express.js, and incorporates Object-Oriented Programming (OOP) concepts. It provides functionality for user registration, login, profile management, and interaction with recipes.

Table of Contents
Installation
Usage
API Endpoints
Authentication
Database Schema
OOP Concepts
Deployment
Installation <a name="installation"></a>
Clone the repository:
bash
Copy code
git clone https://github.com/surendrayadavcse/Backend-assignment.git
Navigate to the project directory:
bash
Copy code
cd Backend-assignment
Install dependencies:
Copy code
npm install
Usage <a name="usage"></a>
Set up a suitable database system (e.g., MongoDB, PostgreSQL) and configure the database connection in the .env file.

Populate the database with sample data for users and recipes.

Start the server:

sql
Copy code
npm start
Access the API endpoints using tools like Postman or a frontend application.

API Endpoints <a name="api-endpoints"></a>
User Endpoints
POST /users/register: Register a new user.
POST /users/login: Login with existing credentials.
PUT /users/:userId: Update user profile information.
Recipe Endpoints
POST /recipes: Create a new recipe.
GET /recipes/:recipeId: Get details of a specific recipe.
PUT /recipes/:recipeId: Update an existing recipe.
DELETE /recipes/:recipeId: Delete a recipe.
Authentication <a name="authentication"></a>
Authentication is handled using JWT (JSON Web Tokens). Upon successful login, a JWT token is generated and sent back to the client, which is then included in the headers of subsequent requests to authenticate the user.

Database Schema <a name="database-schema"></a>
User Schema
username: String (required)
email: String (required, unique)
password: String (required)
Recipe Schema
title: String (required)
description: String
ingredients: Array of Strings
instructions: String
image: String (optional)
OOP Concepts <a name="oop-concepts"></a>
The API is structured using classes, following OOP principles such as encapsulation and modularity. The User and Recipe classes encapsulate the logic for user-related and recipe-related operations, respectively. This allows for better organization of code and easier maintenance.

Deployment <a name="deployment"></a>
The backend API can be deployed on a cloud platform (e.g., Heroku, AWS) by following the deployment instructions provided by the hosting provider. Once deployed, provide the live link to the deployed API for testing and evaluation.

This README provides an overview of the backend API for the recipe sharing platform. For detailed documentation of API endpoints and expected request/response formats, please refer to the codebase and documentation files.




