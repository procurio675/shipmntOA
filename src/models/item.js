const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const itemSchema = new mongoose.Schema({
  id: {type: String,
    default: uuidv4
  },
  name: { type: String, required: true, unique: true },
  tax: { type: Number, required: true}
});

module.exports = mongoose.model('item', itemSchema);
