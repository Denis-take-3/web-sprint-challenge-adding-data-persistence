exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { id: 1, project: 'change tire' },
        { id: 2, project: 'buy groceries' },
        { id: 3, project: 'mow lawn' },
      ]);
    });
};
