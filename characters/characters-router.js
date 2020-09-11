// import express
const express = require("express")
// import characters model
const Characters = require("./characters-model")

// make router
const router = express.Router()

// make endpoints

// GET /characters - get characters
router.get("/", async (req, res, next) => {
    try {
        res.json(await Characters.find())
    } catch (err) {
        next(err)
    }
})

// GET /characters/:id - get character by id

// POST /characters - create character

// PUT /characters/:id - update character

// export router
module.exports = router