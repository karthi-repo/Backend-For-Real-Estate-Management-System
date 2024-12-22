const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    type: { type: String, enum: ['apartment', 'house', 'office', 'land', 'villa'], required: true },
    status: { type: String, enum: ['available', 'sold', 'rented'], default: 'available' },
    price: { type: Number, required: true },
    address: {
      street: String,
      city: String,
      state: String,
      country: String
    },
    features: {
      bedrooms: { type: Number },
      area: { type: Number }, 
      parking_spaces: { type: Number },
      furnished: { type: Boolean, default: false }
    },
    owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
const Property = mongoose.model('Property', propertySchema);
module.exports = Property;  