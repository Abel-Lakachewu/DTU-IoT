const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const newsesRoutes = require('./routes/newses-routes');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');
const internRoute = require('./routes/intern');
const internAccRoute = require('./routes/intern-acc');


const HttpError = require('./models/http-error');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/guide3');

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/newses', newsesRoutes);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/intern', internRoute);
app.use('/api/internacc', internAccRoute);


app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
      })
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});


    app.listen(5000);
 