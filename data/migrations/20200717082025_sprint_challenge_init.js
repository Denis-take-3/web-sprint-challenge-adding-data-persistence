exports.up = function (knex) {
  return knex.schema
    .createTable('project', (tbl) => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resource', (tbl) => {
      tbl.increments('id');
      tbl.string('name').notNullable().unique();
      tbl.string('description');
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('project_resource', (tbl) => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('task', (tbl) => {
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.boolean('completed').notNullable().defaultTo(false);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('project_recource')
    .dropTableIfExists('resource')
    .dropTableIfExists('project');
};
