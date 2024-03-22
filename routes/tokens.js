const express = require('express');
const Token = require('../models/token');
const router = express.Router();

// Get all tokens
router.get('/', async (req, res) => {
  try {
    const tokens = await Token.find();
    res.json(tokens);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: err.message });
  }
});

// Get a single token
router.get('/:id', async (req, res) => {
  try {
    const token = await Token.findById(req.params.id);
    if (!token) {
      return res.status(404).json({ message: 'Token not found' });
    }
    res.json(token);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: err.message });
  }
});

// Create a token
router.post('/', async (req, res) => {
  const token = new Token({
    token: req.body.token,
    price: req.body.price,
    volume: req.body.volume,
    timestamp: req.body.timestamp
  });

  try {
    const newToken = await token.save();
    res.status(201).json(newToken);
  } catch (err) {
    console.error('Error:', err);
    res.status(400).json({ message: err.message });
  }
});

// Update a token
router.put('/:id', async (req, res) => {
  try {
    const token = await Token.findById(req.params.id);
    if (!token) {
      return res.status(404).json({ message: 'Token not found' });
    }

    token.token = req.body.token;
    token.price = req.body.price;
    token.volume = req.body.volume;
    token.timestamp = req.body.timestamp;

    const updatedToken = await token.save();
    res.json(updatedToken);
  } catch (err) {
    console.error('Error:', err);
    res.status(400).json({ message: err.message });
  }
});

// Delete a token
router.delete('/:id', async (req, res) => {
    try {
      const token = await Token.findById(req.params.id);
      if (!token) {
        return res.status(404).json({ message: 'Token not found' });
      }
  
      await Token.deleteOne({ _id: req.params.id });
      res.json({ message: 'Token deleted' });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: err.message });
    }
  });
  


module.exports = router;
