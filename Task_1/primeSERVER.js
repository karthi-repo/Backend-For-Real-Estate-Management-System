const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const propertyRoutes = require('./routes/property');

// Middleware
app.use(express.json()); //-> For raw data in postman
app.use(express.urlencoded({ extended: false }));//-> for form in postman

// MongoDB connection
mongoose.connect('mongoDB URL')
  .then(() => {
    app.listen(3000, () => {
      console.log('APP RUNNING ON PORT 3000 > > > >');
    });
    console.log("CONNECTED TO MONGO XD");
  }).catch((error) => {
    console.log(error);
  });

// Routes
app.use('/user', userRoutes); 
app.use('/property', propertyRoutes); 

