const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const jsonData = require('../client/public/api/flights.json');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

const flightRouter = createRouter(jsonData);
app.use('/api/flights',flightRouter);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use(function(req, res) {
    res.status(404).end('Error: This page does not exist');
});

app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
