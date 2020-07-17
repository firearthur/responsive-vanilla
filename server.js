const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('colors');
require('dotenv').config();

const app = express();
const DEFAULT_PORT = 3333;
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cors({
  allowedHeaders: 'Content-Type, authorization',
  methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
}));

/**
 * if the node env is in production then we're serving from the transpiled folder
 * at dis/index.html
 * in production, server would serve static at port 3333 no client server
 */


app.get('/api/hello', (req, res) => {
  console.log('I was hit'.blue);
  res.send(JSON.stringify({ word: 'Hello world' }));
});

app.use(express.static(path.join(__dirname, '/dist/')));
// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT.blue}`.green);
});
