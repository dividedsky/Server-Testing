require('dotenv').config();
const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.send('sanity check!')
})

server.post('/peoples', (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    res.status(400).end();
  } else {
    res.status(201).send();
  }
})

module.exports = server;
