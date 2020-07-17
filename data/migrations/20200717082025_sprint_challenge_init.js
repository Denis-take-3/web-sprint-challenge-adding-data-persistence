exports.up = function (knex) {
  return knex.schema
    .createTable('project', (tbl) => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('recource', (tbl) => {
      tbl.increments('id');
      tbl.string('name').notNullable().unique();
      tbl.string('description');
    })
    .createTable('task', (tbl) => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('notes');
      tbl.boolean('completed').notNullable().defaultTo(false);
    });
};

exports.down = function (knex) {};
