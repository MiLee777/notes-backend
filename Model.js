const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Notes', Schema);