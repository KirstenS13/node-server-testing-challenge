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
router.get("/:id", async (req, res, next) => {
    try {
        const character = await Characters.findById(req.params.id)
        if (!character) {
            res.status(404).json({
                message: "User not found"
            })
        }
        res.json(character)
    } catch (err) {
        next(err)
    }
})

// POST /characters - create character

// PUT /characters/:id - update character

// export router
module.exports = router