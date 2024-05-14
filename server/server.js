const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./config/database');
const path = require("path");


connectDB()

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, './public')));

app.use(
  cors({
    origin:(origin, callback) => callback(null, true),
    credentials:true,
  })
)

app.use('/api/product', require('./routes/productRoutes'));


app.listen(port || 5000, () => console.log(`Server started on port ${port}`));
