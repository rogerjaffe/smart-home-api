const { lambdaHandler } = require("../../generateToken");
const { LENGTH, CHARSET } = require("../../constants");

describe("generateToken", () => {
  it("generate a token", async () => {
    const result = await lambdaHandler();
    expect(result.token.length).toBe(LENGTH);
    const regexp = new RegExp("^[" + CHARSET + "]+$");
    expect(result.token).toMatch(regexp);
  });
});
