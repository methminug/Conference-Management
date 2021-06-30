const axios = require("axios");

describe("GET @/geting  pending notices", () => {
    it("send json data object", async () => {
        try {
            const res = axios.get(
                "http://localhost:3000/admin/getPendingNotice"
            );
            expect(res.status).toEqual(200);
            expect(res.headers["content-type"]).toEqual(
                expect.stringContaining("json")
            );
        } catch (error) {
            console.log(error);
        }
    });
});

describe("GET @/get attendee count", () => {
    it("send with a 200 error status code", async () => {
        try {
            const res = axios.get("http://localhost:3000/admin/attendeecount");
            expect(res.status).toEqual(200);
        } catch (error) {
            console.log(error);
        }
    });
});
