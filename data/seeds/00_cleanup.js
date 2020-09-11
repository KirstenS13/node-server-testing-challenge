exports.seed = async function (knex) {
  await knex("characters").truncate()
}
