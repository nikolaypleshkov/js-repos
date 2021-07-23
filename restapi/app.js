const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//Import Routes
const postRoute = require('./routes/post');

//Middlewares
app.use('/posts', postRoute); 

//Routes
app.get('/', (req, res) => {
    res.send('Working');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
 { userNewUrlParser: true,  useUnifiedTopology: true},
  () => {
    console.log('connected to DB');
});

//listening
app.listen(5000);