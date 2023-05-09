require('dotenv').config();
const express = require('express');
const db = require('./config/connection');
const cors = require('cors');
const path = require('path');
const contactForm = require('./models/contactForm');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/*',(req,res)=>{
  contactForm.create(req.body)
  res.json('Your message has been sent!');
})



db.once('open', () => {
  console.log('MongoDB connection established successfully.');
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});