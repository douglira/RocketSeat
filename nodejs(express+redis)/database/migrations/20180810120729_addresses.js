exports.up = knex => {
  return knex.schema.createTable('addresses', table => {
    table.increments()
    table.string('zipCode').notNullable()
    table.string('street').notNullable()
    table.string('district').notNullable()
    table.string('city').notNullable()
    table.string('provinceCode', 2).notNullable()
    table
      .string('countryName')
      .notNullable()
      .defaultTo('Brasil')
    table.integer('buildingNumber').notNullable()
    table.text('additionalData').nullable()
    table.timestamp('createdAt', true)
    table.timestamp('updatedAt', true)
    table
      .integer('personId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('people')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('addresses')
}
