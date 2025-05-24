# EncroLink

EncroLink is a secure, futuristic platform that enables users to register and receive encrypted messages without 
exposing their personal contact information. It leverages a third-party email provider for secure message delivery
and includes user registration, verification, encrypted message routing, and a simple admin dashboard.

## Features

- User registration and login with JWT authentication
- Email verification for new users
- End-to-end encrypted messaging routed via email
- Secure admin dashboard to manage users and messages
- Modern, sleek, and responsive frontend built with React and Tailwind CSS
- Backend powered by Node.js, Express, MongoDB, and Nodemailer

## Project Structure

EncroLink/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ ├── config/
│ ├── .env
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── public/
│ ├── src/
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── package.json
│ └── ...
├── README.md
└── .gitignore



## Getting Started

### Backend

1. Install dependencies:

```bash
cd backend
npm install


Setup your .env file with necessary environment variables (MongoDB URI, JWT secret, email provider credentials, encryption keys).

Run the backend server:

npm run dev


Frontend
Install dependencies:

cd frontend
npm install


Run the development server:

npm run dev


Open your browser and navigate to http://localhost:5173 (default Vite port).


Features

- User registration & verification via email
- Encrypted message delivery
- Contact form
- Admin dashboard
- Fully responsive and animated UI using React + Tailwind CSS
- Backend built with Node.js + Express + MongoDB

Technologies Used

- Frontend: React, React Router DOM,  Tailwind CSS, Vite
- Backend: Node.js, Express, MongoDB, SendGrid,  Nodemailer for email service
- Encryption: AES-256 with IV
- Deployment-ready configuration
- Node.js, Express.js
- MongoDB, Mongoose
- JSON Web Tokens (JWT)
- Crypto for encryption


Setup Instructions

 Backend

```bash
cd backend
npm install
cp .env.example .env
# Fill in DB_URI, JWT_SECRET, ENCRYPT_KEY, ENCRYPT_IV, EMAIL_API_KEY, etc.
npm start


License
MIT

