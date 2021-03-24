// import supertest
const supertest = require("supertest")

// import our server
const server = require("../server")

// test the welcome endpoint
test("GET /", async () => {
    // have supertest make a get request to the / path of our server
    const res = await supertest(server).get("/")

    // make assertions
    // correct status code?
    expect(res.statusCode).toBe(200)
    // correct data type?
    expect(res.type).toBe("application/json")
    // correct data?
    expect(res.body.message).toBe("You have reached the server. Congratulations.")
})