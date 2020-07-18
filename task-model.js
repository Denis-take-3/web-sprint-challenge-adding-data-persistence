const db = require('./knex-config');

module.exports = {
  find,
  add,
};

function find() {
  return db('task as t')
    .join('project as p', 't.project_id', '=', 'p.id')
    .select('p.name', 'p.description', 't.description', 't.notes');
}

function add(data) {
  return db('task').insert(data);
}
