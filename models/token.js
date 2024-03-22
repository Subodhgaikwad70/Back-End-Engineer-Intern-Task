const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique:true },
  price: { type: Number, required: true },
  volume: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
