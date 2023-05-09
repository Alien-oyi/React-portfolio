const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const contactForm = mongoose.model('messages', contactFormSchema);

module.exports = contactForm;