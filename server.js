const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/examapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors()); // Enable CORS for all origins
app.use(express.json());

const User = require('./models/User');
const Question = require('./models/Question');
const jwtSecret = 'yourSecretKey';

// (Register, Login, Auth Middleware, Upload, Get Questions routes as in the previous setup)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

