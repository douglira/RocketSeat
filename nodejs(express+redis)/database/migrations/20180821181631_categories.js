
exports.up = knex => {
  return knex.schema.createTable('categories', table => {
    table.increments()
    table.string('title').unique().notNullable()
    table.boolean('isRoot').notNullable()
    table.integer('layer').notNullable()
    table
      .enu('status', ['active', 'inactive'], { useNative: true, enumName: 'categories_type' })
      .notNullable()
      .defaultTo('active')
    table.text('description').nullable()
    table.timestamp('createdAt', true)
    table.timestamp('updatedAt', true)

    table
      .integer('categoryId')
      .unsigned()
      .nullable()
      .references('id')
      .inTable('categories')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('categories')
}
