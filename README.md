# eCommerce API

This is a RESTful API for an eCommerce platform. The API allows you to manage products, orders, users, and payments. It is designed to facilitate building and integrating an online store.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Example Requests](#example-requests)
- [Error Handling](#error-handling)
- [License](#license)

---

## Features

- **Product Management**: Add, update, delete, and view products.
- **User Management**: Register, login, and manage users.
- **Order Management**: Place, update, and view orders.
- **Cart System**: Add and remove items from the shopping cart.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/suzangyawali/eCommerce-API.git
   ```

2. Navigate into the project directory:
   ```bash
   cd eCommerce-API
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file and set up the required environment variables (e.g., database URL, JWT secret, etc.).

5. Start the server:
   ```bash
   npm start
   ```

---

## Usage

The API is now running and can be accessed at `http://localhost:5000`. Use your preferred API client (e.g., Postman) to make requests.

---

## API Endpoints

### 1. **Authentication**

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login an existing user and receive a JWT token.

### 2. **Products**

- **GET /products**: Get a list of all products.
- **GET /products/:id**: Get a specific product by ID.
- **POST /products**: Add a new product (Admin only).
- **PUT /products/:id**: Update a product (Admin only).
- **DELETE /products/:id**: Delete a product (Admin only).



## Authentication

The API uses JWT (JSON Web Tokens) for authentication. After logging in or registering, you'll receive a JWT token. Include the token in the `Authorization` header for protected routes.

Example header:
```bash
Authorization: Bearer <your-jwt-token>
```

---

## Example Requests

### Register
```bash
POST /auth/register
Body: 
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```bash
POST /auth/login
Body:
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get All Products
```bash
GET /products
Authorization: Bearer <your-jwt-token>


---

## Error Handling

The API uses standard HTTP status codes to indicate the result of API requests.

- **200 OK**: Request was successful.
- **201 Created**: Resource was successfully created.
- **400 Bad Request**: The request is invalid.
- **401 Unauthorized**: Missing or invalid authentication token.
- **404 Not Found**: The resource was not found.
- **500 Internal Server Error**: Something went wrong on the server.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify this template based on your specific eCommerce API's features and endpoints.
