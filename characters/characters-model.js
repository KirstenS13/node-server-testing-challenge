// import db
const db = require("../data/config")

// make helper methods
function find() {
    return db("characters")
}

function findById(id) { // putting first() makes it so that only one result is returned, not an array with one item in it
    return db("characters").where({ id }).first()
}

async function insert(data) {
    const [id] = await db("characters").insert(data)
    return findById(id)
}

function remove(id) {
    return db("characters").where({ id }).del()
}

// export helper methods
module.exports = {
    find,
    findById,
    insert,
    remove
}