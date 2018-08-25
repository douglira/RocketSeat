exports.up = function (knex) {
  return knex.schema.raw(`
  CREATE OR REPLACE VIEW user_report_paginate
  AS SELECT "users"."id" AS "user_id",
    "users"."avatar" AS "user_avatar",
    "users"."email" AS "user_email",
    "users"."displayName" AS "user_displayName",
    "users"."status" AS "user_status",
    "users"."createdAt" AS "users_createdAt",
    "people"."id" AS "people_id",
    "people"."name" AS "people_name"
    FROM "users"
    INNER JOIN "people" ON "people"."userId" = "users"."id"
    WHERE "users"."role" = 'user'
    ORDER BY "people_name" ASC
  `)
}

exports.down = function (knex) {
  return knex.shema.raw('DROP VIEW user_report_paginate')
}
