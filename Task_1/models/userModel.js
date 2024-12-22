const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['buyer', 'seller', 'agent', 'admin'], default: 'buyer' },
  phone_number: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
