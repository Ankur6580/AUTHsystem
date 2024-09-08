# AUTHsystem

AUTHsystem is a full-stack web application that provides a secure user authentication system. It includes features like user registration, login, password reset, and secure access to protected routes.

## Demo

Check out the live demo of the application: [AUTHsystem Demo](https://authsystem-iota.vercel.app/)

Watch the video demo on YouTube: [Click here](https://www.youtube.com/watch?v=eryfMBWO4fE)

Or click the image below to watch:

[![Watch the demo](https://img.youtube.com/vi/eryfMBWO4fE/maxresdefault.jpg)](https://www.youtube.com/watch?v=eryfMBWO4fE)



## Features

- User Registration
- Login with JWT-based authentication
- Password reset via email with secure token
- Secure password storage using bcrypt
- RESTful API integration between frontend and backend
- SQLite3 as a lightweight database solution

## Tech Stack

### Frontend

- **JavaScript (ES6+)**
- **React.js**
- **Vite** (for development server and build tool)
- **CSS** for styling

### Backend

- **Node.js**
- **Express.js** (API and server)
- **JWT** (for secure user authentication)
- **bcryptjs** (for password hashing)
- **SQLite3** (for database storage)
- **Nodemailer** (for sending password reset emails)

## Project Structure

```
AUTHsystem/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── index.html
│   └── vite.config.js
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── users_database.db
│   ├── createTables.js
│   ├── package.json
│   ├── server.js
│   └── .env
├── README.md
└── .gitignore
```

## Setup and Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Vite** (for frontend)

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```bash
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password
```

### Backend Setup

1. Clone the repository and navigate to the `backend` folder:

   ```bash
   git clone https://github.com/Ankur6580/AUTHsystem.git
   cd AUTHsystem/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create and initialize the database:

   ```bash
   node createTables.js
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

### Running the Application

- The frontend will be served on `http://localhost:5173`
- The backend API will run on `http://localhost:5000`

## API Endpoints

- **POST** `/auth/register` - User registration
- **POST** `/auth/login` - User login
- **POST** `/auth/forgot-password` - Request password reset
- **POST** `/auth/reset-password?token=<token>` - Reset password
- **GET** `/dashboard` - Access to secure area (protected with JWT)

## Usage

1. Register a new user.
2. Log in with valid credentials to receive a JWT.
3. Use the JWT token to access secure areas like `/dashboard`.
4. Use the "Forgot Password" feature to reset your password via email.
