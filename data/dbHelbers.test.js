const db = require('./dbConfig');
const helpers = require('./dbHelbers');

// afterEach(async () => {
//   await db('peoples').truncate();
// });

describe('peoples helper', () => {
  it('should insert a person', async () => {
    const person = await helpers.addPerson({first_name: 'justin', last_name: 'lowry'});
    const people = await db('peoples');
    expect(people).toHaveLength(1);
  })
  it('should return a list of people', async () => {
    const people = await helpers.getPeople();
    expect(people).toHaveLength(1);
  })
})
