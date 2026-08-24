const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const profileSchema = new mongoose.Schema({
  id: {type: String,
    default: uuidv4
  },
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  address: { type: String, required: true },
  opening_balance: {type: Number, required: true}
});

module.exports = mongoose.model('profile', profileSchema);
