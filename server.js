const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();
const app = express();
connectDB();

// App Middlewares
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
