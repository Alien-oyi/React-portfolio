const mongoose = require('mongoose');
const ContactForm = require('../models/contactForm');


module.exports = {
  saveFormData(req, res) {
    ContactForm.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};