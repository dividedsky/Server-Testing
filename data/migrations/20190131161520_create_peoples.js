
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peoples', tbl => {
    tbl.increments();
    tbl.string('first_name').notNullable();
    tbl.string('last_name').notNullable();
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('peoples');
};
