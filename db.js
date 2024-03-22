const mongoose = require('mongoose');
require("dotenv").config();
const db = process.env.DATABASE_URL;
// Connect to MongoDB through Mongoose

mongoose.connect(db)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));
