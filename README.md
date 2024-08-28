# Study Smart - Examination Question Repository

## Overview

**Study Smart** is a web application designed to help students prepare for exams by providing access to past examination questions and their answers. Users can upload, download, and view exam papers to aid in their study efforts. The application is built with a React frontend and a Node.js/Express backend.

## Features

- **User Authentication**: Users can register and log in to their accounts.
- **Upload Exam Papers**: Authenticated users can upload exam papers in PDF format.
- **Download Exam Papers**: All users can download available exam papers.
- **Responsive Design**: The application is designed to work on various devices, including desktops, laptops, tablets, and smartphones.

## Project Structure

```plaintext
Study_Smart_repo/
│
├── package.json          # Contains project metadata and dependencies
├── server.js             # Entry point for the Node.js/Express backend server
├── README.md             # Project documentation
├── src/                  # React frontend source code
│   ├── App.js            # Main React component
│   ├── components/       # Reusable components (Header, QuestionList)
│   └── pages/            # Application pages (Login, Register, Home, Upload)
├── public/               # Public assets (index.html, favicon, etc.)
└── node_modules/         # Installed dependencies (auto-generated)
```

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **npm**: Node.js comes with npm (Node Package Manager). Ensure it’s up to date.

### Step 1: Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/Study_Smart_repo.git
cd Study_Smart_repo
```

### Step 2: Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### Step 3: Set Up the Backend

Ensure your backend server is ready. You can start it using `nodemon` (make sure you have `nodemon` installed globally):

```bash
nodemon server.js
```

If you haven’t set up a backend yet, create a simple `server.js` file with the necessary API endpoints (for authentication, file upload/download, etc.).

### Step 4: Run the Frontend

Start the React development server:

```bash
npm start
```

This should automatically open the application in your default web browser. If not, navigate to [http://localhost:3000](http://localhost:3000).

## Usage

1. **Home Page**: View the list of available exam papers.
2. **Login/Register**: Create a new account or log in with existing credentials.
3. **Upload Page**: Upload new exam papers (for authenticated users).
4. **Download Papers**: Click on the download link to download a specific exam paper.

## API Endpoints (Backend)

- **`POST /api/register`**: Register a new user.
- **`POST /api/login`**: Log in an existing user and return a JWT token.
- **`POST /api/upload`**: Upload an exam paper (authenticated).
- **`GET /api/questions`**: Retrieve a list of available exam papers (authenticated).

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure your changes are well documented.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React**: A JavaScript library for building user interfaces.
- **Express**: A minimal and flexible Node.js web application framework.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.

---
