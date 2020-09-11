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
                message: "Character not found"
            })
        }
        res.json(character)
    } catch (err) {
        next(err)
    }
})

// POST /characters - create character
router.post("/", async (req, res, next) => {
    try {
        if (!req.body.name) {
            return res.status(400).json({
                message: "Please provide character name"
            })
        }
        const characterData = { name: req.body.name }
        const newCharacter = await Characters.insert(characterData)
        res.status(201).json(newCharacter)
    } catch (err) {
        next(err)
    }
})

// DELETE /characters/:id - delete character
router.delete("/:id", async (req, res, next) => {
    try {
        const character = await Characters.findById(req.params.id)
        if (!character) {
            return res.status(404).json({
                message: "Character not found"
            })
        }
        const response = await Characters.remove(req.params.id)
        if (!response) {
            return res.status(500).json({
                message: "Character was not deleted"
            })
        }
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

// export router
module.exports = router