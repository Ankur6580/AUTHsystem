# AUTHsystem Backend

## Overview

AUTHsystem is a backend service for user authentication, utilizing Node.js, Express, JWT, bcrypt, SQLite3, and Nodemailer. This project follows the MVC (Model-View-Controller) pattern and includes functionalities for user registration, login, password reset, and secured dashboard access.

## Features

- User Registration
- User Login
- Password Reset Request
- Password Reset with Token
- Secured Dashboard Access

## Technologies

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **SQLite3**: Lightweight database
- **Nodemailer**: Email sending

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   JWT_SECRET=it-is-a-secret-key
   EMAIL_USER=yourEmail
   EMAIL_PASSWORD=yourPassword
   CLIENT_URL=http://localhost:5173
   ```

4. **Run database migrations:**
   Ensure `createTables.js` has created the necessary tables in your SQLite database.

## API Endpoints

### 1. Register User

- **URL**: `/api/v1/auth/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "name": "username",
    "email": "test-email@gmail.com",
    "password": "test-password"
  }
  ```

- **Description**: Registers a new user with the provided details.

### 2. Login User

- **URL**: `/api/v1/auth/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "test-email@gmail.com",
    "password": "test-password"
  }
  ```

- **Description**: Authenticates the user and returns a JWT token.

### 3. Access Dashboard

- **URL**: `/api/v1/dashboard`
- **Method**: `GET`
- **Headers**:
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`
- **Description**: Access the secured dashboard. Requires a valid JWT token.

### 4. Password Reset Request

- **URL**: `/api/v1/auth/reset-password-request`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "test-email@gmail.com"
  }
  ```

- **Description**: Sends a password reset link to the specified email.

### 5. Reset Password

- **URL**: `/api/v1/auth/reset-password`
- **Method**: `POST`
- **Query Params**:
  - `token=<reset-token>`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "password": "new-password"
  }
  ```

- **Description**: Resets the user’s password using the provided token.

## Running the Application

To start the server, use:
```bash
npm start
```

The server will run on `http://localhost:5000`.

## Directory Structure

**controllers**: Contains logic for handling requests and responses.
**db**: Database configuration and connection.
**middlewares**: Contains middleware functions, such as authentication checks.
**models**: Database models.
**routes**: API routes.
**services**: Business logic and services.
**utils**: Utility functions and helpers.
**createTables.js**: Script to initialize database tables.
**server.js**: Entry point of the application.
