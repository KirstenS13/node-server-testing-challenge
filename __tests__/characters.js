// import supertest
const supertest = require("supertest")

// import our server
const server = require("../server")

// import db

// write tests
describe("characters integrations tests", () => {
    // get characters
    it("GET /characters", async () => {
        // get request to /characters path with supertest
        const res = await supertest(server).get("/characters")

        // make assertions
        // correct status code?
        expect(res.statusCode).toBe(200)
        // correct data type?
        expect(res.type).toBe("application/json")
        // correct data?
        expect(res.body).toHaveLength(6)
        expect(res.body[0].name).toBe("luna lovegood")
    })
})

// get character by id

// get character by id - not found

// create character

// create character - bad request (no data)

// update character

// update character - bad request (no data)