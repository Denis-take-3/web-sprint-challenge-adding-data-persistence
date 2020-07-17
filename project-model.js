const db = require('./knex-config');

module.exports = {
  get,
  add,
};

function get() {
  return db('project');
}

function add(data) {
  return db('project')
    .insert(data)
    .then((count) => {
      if (count === 0) {
        return (count = false);
      } else {
        return (count = true);
      }
    });
}
