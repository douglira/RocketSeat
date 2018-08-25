exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('avatar').nullable()
    table
      .string('email')
      .notNullable()
      .unique()
    table.string('displayName').notNullable()
    table.string('password', 100).notNullable()
    table.string('passwordResetToken').nullable()
    table.string('passwordExpiresIn').nullable()
    table
      .enu('role', ['admin', 'user'], {
        useNative: true,
        enumName: 'users_role'
      })
      .notNullable()
      .defaultTo('user')
    table.timestamp('createdAt')
    table.timestamp('updatedAt')
    table
      .enu('status', ['active', 'inactive'], {
        useNative: true,
        enumName: 'users_status'
      })
      .notNullable()
      .defaultTo('active')
    table
      .timestamp('lastActive')
      .nullable()
      .defaultTo(knex.fn.now())
    table.timestamp('lastInactive').nullable()
    table
      .integer('statusChangedBy')
      .unsigned()
      .nullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users')
}
