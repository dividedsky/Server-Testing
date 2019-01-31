const db = require('./dbConfig');

module.exports = {
  addPerson: person => db('peoples').insert(person),
  getPeople: () => db('peoples'),
  deletePerson: id => db('peoples').where({ id }).delete(),
}
