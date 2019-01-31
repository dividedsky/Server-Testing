const db = require('./dbConfig');
const helpers = require('./dbHelbers');

afterEach(async () => {
  await db('peoples').truncate();
});

describe('peoples helper', () => {
  it.skip('should insert a person and return a person', async () => {
    const person = await helpers.addPerson({first_name: 'justin', last_name: 'lowry'});
    const people = await helpers.getPeople();
    expect(people).toHaveLength(1);
  });
  it('should delete a person with a given id', async () => {
    await db('peoples').truncate();
    const [ id ] = await helpers.addPerson({first_name: 'justin', last_name: 'lowry'});
    let people = await helpers.getPeople();
    expect(people).toHaveLength(1);
    await helpers.deletePerson(id);
    people = await helpers.getPeople();
    expect(people).toHaveLength(0);
  })
  it('should delete all people', async () => {
    const person = {first_name: 'justin', last_name: 'lowry'};
    await helpers.addPerson(person);
    await helpers.addPerson(person);
    let people = await helpers.getPeople();
    expect(people).toHaveLength(2);
    await helpers.deleteAllPeople();
    people = await helpers.getPeople();
    expect(people).toHaveLength(0);
  })
})

