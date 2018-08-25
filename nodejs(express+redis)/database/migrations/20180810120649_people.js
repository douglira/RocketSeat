exports.up = function (knex) {
  return knex.schema.createTable('people', table => {
    table.increments()
    table.string('name').notNullable()
    table.date('birthday').nullable()
    table
      .enu('gender', ['male', 'female'], {
        useNative: true,
        enumName: 'people_gender'
      })
      .nullable()

    table.bigInteger('tel', 15).notNullable()
    table.bigInteger('cel', 15).nullable()
    table
      .bigInteger('cpf', 11)
      .nullable()
      .unique()
    table
      .bigInteger('cnpj', 20)
      .nullable()
      .unique()
    table.string('corporateName').nullable()

    table.bigInteger('stateRegistration', 25).nullable()

    table
      .integer('userId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.timestamp('createdAt', true)
    table.timestamp('updatedAt', true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('people')
}
