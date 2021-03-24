const express = require("express")
const charactersRouter = require("./characters/characters-router")

const server = express()

server.use(express.json())
server.use("/characters", charactersRouter)

server.get("/", (req, res) => {
    res.json({
        message: "You have reached the server. Congratulations."
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
})

module.exports = server