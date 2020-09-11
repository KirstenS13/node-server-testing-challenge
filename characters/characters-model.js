// import db
const db = require("../data/config")

// make helper methods
function find() {
    return db("characters")
}

// export helper methods
module.exports = {
    find,

}