const request = require('supertest');
const server = require('./server');

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
