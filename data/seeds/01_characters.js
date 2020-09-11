exports.seed = async function (knex) {
  await knex("characters").insert([
    { name: "luna lovegood" },
    { name: "eomer" },
    { name: "amy pond" },
    { name: "shelob" },
    { name: "aragog" },
    { name: "rowena ravenclaw" }
  ])
}
