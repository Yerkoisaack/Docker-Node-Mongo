const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();



app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
    .connect(
        'mongodb://mongo:27017/docker-node-mongo', { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.send('Hello World')
})



const port = 3000;

app.listen(port, () => console.log('Server running...'));