'use strict';

const express = require('express')
const app = express()

// port number
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});

// listen on the port
app.listen(port);
