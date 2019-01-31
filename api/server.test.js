const request = require('supertest');
const server = require('./server');
const db = require('../data/dbHelbers');

describe('/POST /peoples', () => {
  it('should return a status code of 400 if first or last name is not provided', async () => {
    try {
    let response = await request(server).post('/peoples');
    expect(response.status).toBe(400);
    } catch(err) {
      console.log(err);
      
    }
  });
  it('should return a status code of 201 with a valid post request', async () => {
    try {
    const body = {firstName: 'justin', lastName: 'lowry'};
    let response = await request(server).post('/peoples').send(body);
    expect(response.status).toBe(201);
    } catch(err) {
      console.log(err);
      
    }
  })
});

describe('GET /peoples', () => {
  it('should return a list of people', async () => {
    const response = await request(server).get('/peoples');
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/i);
    expect(response.body[0]).toEqual({ id: 1, first_name: 'justin', last_name: 'lowry' });
  })
})

describe('DELETE /peoples', () => {
  it('should delete a person with a specified id', async () => {
    await db.deleteAllPeople()
    const body = {firstName: 'mookie', lastName: 'betts'};
    let response = await request(server).post('/peoples').send(body);
    response = await request(server).get('/peoples');
    expect(response.body).toHaveLength(1);
    response = await request(server).delete('/peoples/1');
    expect(response.status).toBe(200);
  })
})
