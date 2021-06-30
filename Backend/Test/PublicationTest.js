const axios = require("axios");

describe("GET @ /publication api", () => {
    it(" return all publication and return status code 200", async () => {
        try {
            const res = axios.get(
                "http://localhost:5000/publication/getAllPublications"
            );

            expect(res.status).toEqual(200);
            expect(typeof res.data).toEqual("Object");
        } catch (error) {
            console.log(error);
        }
    });
});
