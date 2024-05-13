const express = require('express');
const app = express();
const mongoose = require('mongoose')
const StuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')
const path = require('path');


mongoose.connect('mongodb+srv://MonVieuxGrimoire:azerty12345@crowns.z9bxsko.mongodb.net/?retryWrites=true&w=majority&appName=crowns',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/books', StuffRoutes)

app.use('/api/auth', userRoutes)




module.exports = app;