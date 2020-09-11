// import supertest
const supertest = require("supertest")
// import our server
const server = require("../server")
// import db
const db = require("../data/config")

// jest hooks
beforeEach(async () => {
    // reseed database before each test
    await db.seed.run()
})

afterAll(async () => {
    // close database connection after last test
    await db.destroy()
})

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

    // get character by id
    it("GET /characters/:id", async () => {
        // get request to /characters/:id path with supertest
        const res = await supertest(server).get("/characters/1")
        console.log(res.body)
        // make assertions
        // correct status code?
        expect(res.statusCode).toBe(200)
        // correct data type?
        expect(res.type).toBe("application/json")
        // correct data?
        expect(res.body.name).toBe("luna lovegood")
    })
})



// get character by id - not found

// create character

// create character - bad request (no data)

// update character

// update character - bad request (no data)