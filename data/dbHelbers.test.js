const db = require('./dbConfig');
const helpers = require('./dbHelbers');

afterEach(async () => {
  await db('peoples').truncate();
});

describe.skip('peoples helper', () => {
  it('should insert a person and return a person', async () => {
    const person = await helpers.addPerson({first_name: 'justin', last_name: 'lowry'});
    const people = await helpers.getPeople();
    expect(people).toHaveLength(1);
  })
})
