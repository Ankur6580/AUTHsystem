
# AUTHsystem

AUTHsystem is a simple authentication system built with React that allows users to register, login, and reset their password. The system supports sending a password reset link to the user's email (via Gmail) and allows the user to reset their password securely.

## Features

1. **User Registration**: Users can register with their username, email, and password.
2. **User Login**: Users can log in using their email and password.
3. **Password Reset**: Users can request a password reset link, which will be sent to their registered Gmail account. The link allows users to reset their password securely.

## Project Structure

```
AUTHsystem/
├── src/
│   ├── api/              # REST APIs
│   ├── assets/           # Static files and images
│   ├── pages/            # Page components (Register, Login, ForgotPassword)
│   ├── services/         # API service calls (registration, login, reset password)
│   ├── utils/            # Utility functions (validation, token handling, etc.)
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point for the application
│   └── styles/           # Custom CSS files for styling
├── .env                  # Environment variables (API URL, Gmail credentials)
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation (this file)
```

## Pages and Routes

### Registration (`/auth/register`)
- **Description**: Allows new users to create an account by providing a username, email, and password.
- **Fields**: 
  - Username
  - Email
  - Password
- **API Endpoint**: `POST /auth/register`
- **Validation**: 
  - Username must be alphanumeric.
  - Email must be valid.
  - Password must meet complexity requirements (e.g., minimum length, inclusion of special characters).

### Login (`/auth/login`)
- **Description**: Allows users to log in with their registered email and password.
- **Fields**:
  - Email
  - Password
- **API Endpoint**: `POST /auth/login`
- **Validation**:
  - Email must be valid.
  - Password must match the registered password.

### Forgot Password (`/auth/forgot-password`)
- **Description**: Users can request a password reset link to be sent to their registered email. The link will allow them to reset their password.
- **Fields**:
  - Email
- **API Endpoint**: `POST /auth/forgot-password`
- **Validation**:
  - Email must be valid and registered in the system.

### Reset Password (`/auth/reset-password?token=some-token`)
- **Description**: This page is accessed via the link sent to the user's email. The user can reset their password after verifying their identity through the token.
- **Fields**:
  - New Password
  - Confirm Password
- **API Endpoint**: `POST /auth/reset-password`
- **Validation**:
  - Passwords should be atleast 6 character long.

## API Integration

AUTHsystem communicates with a backend server using REST API calls for registration, login, and password reset functionalities. The base API URL is stored in environment variables for easy configuration.

### Example API Calls:

- **Registration**: 
```js
axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { username, email, password });
```
- **Login**: 
```js
axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
```
- **Forgot Password**: 
```js
axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, { email });
```

## Environment Variables

Create a `.env` file in the project root to store the API URL and Gmail credentials for password reset:

```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GMAIL_USER=your-gmail-email
REACT_APP_GMAIL_PASS=your-gmail-app-password
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ankur6580/AUTHsystem.git
   ```
   
2. Install dependencies:
   ```bash
   cd AUTHsystem
   npm install
   ```

3. Set up environment variables in the `.env` file as mentioned above.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## Tech Stack

- **Frontend**: React, fetch for HTTP requests
- **Styling**: CSS modules, custom styling
- **Backend**: REST API (for registration, login, and password reset functionalities)
- **Email Service**: Gmail for sending password reset links

