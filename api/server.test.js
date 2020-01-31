const request = require("supertest");
const server = require("./server.js");

describe("server", function() {
  describe("GET/", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return json formatted response", function() {
      return request(server)
        .get("/api/users")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it('should return JSON', function() {
        // make a GET request to the API
        return request(server).get('/')
            .then(res => {
            expect(res.body).toEqual({ api: 'up' });
        })
    })
  });
});