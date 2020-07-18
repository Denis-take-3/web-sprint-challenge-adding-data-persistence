const db = require('./knex-config');

module.exports = {
  find,
  add,
};

function find() {
  return db('resource as r')
}

function add(data) {
  return db('resource').insert(data);
}
