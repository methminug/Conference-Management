const order = {
  products: [
    {
      code: "1",
      price: "10",
      quantity: 3,
    },
    {
      code: "1",
      price: "30",
      quantity: 1,
    },
    {
      code: "1",
      price: "40",
      quantity: 1,
    },
  ],
};

const chargeCalculator = require("../controllers/chargecalculator.controller")

const assert = require("assert");
describe("Charge Calculator Test", () => {
  it("should return 350", () => {
    assert.equal(chargeCalculator(order), 350);
  });
});
