// const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./routes/route');
// require('dotenv').config();

// const app = express();

// // set up middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // connect to MongoDB
// mongoose.connect(process.env.DB_URI || "mongodb://127.0.0.1:27017/formsubmit")   
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(`Error connecting to MongoDB: ${err}`));

// // set up routes
// app.use('/', routes);

// // start the server
// const port = process.env.PORT || 5000;
// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});