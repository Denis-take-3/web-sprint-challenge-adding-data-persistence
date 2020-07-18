const db = require('./knex-config');

module.exports = {
  find,
  add,
};

function find() {
  return db('project');
}

function add(data) {
  return db('project').insert(data);
}
