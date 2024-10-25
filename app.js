const express = require('express');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);

module.exports = app;
