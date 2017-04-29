'use strict';

const express = require('express')
const app = express()

// port number
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});


app.get('/jake', (req, res) => {
  res.status(200).json({
    name: 'Jake',
    job: 'Automation Engineer',
    age: 25,
    height: '6ft'
  });
});

app.get('/stanley', (req, res) => {
  res.status(200).json({
    name: 'Jake',
    job: 'Automation Engineer',
    age: 25,
    height: '6ft'
  });
});

// listen on the port
app.listen(port);
