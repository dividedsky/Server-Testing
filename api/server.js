require('dotenv').config();
const express = require('express');
const db = require('../data/dbHelbers');

const server = express();
server.use(express.json());

const people = [];

server.get('/', (req, res) => {
  res.send('sanity check!')
})


server.post('/peoples', (req, res) => {
  const { firstName, lastName } = req.body;
  
  if (!firstName || !lastName) {
    res.status(400).end();
  } else {
    db.addPerson({first_name: firstName, last_name: lastName}).then(
    res.status(201).send()
    )
  }
})

server.get('/peoples', async(req, res) => {
  const people = await db.getPeople();
    res.status(200).json(people);
  })
module.exports = server;
