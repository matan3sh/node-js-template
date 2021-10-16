const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const test = true;

// App Middlewares
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
