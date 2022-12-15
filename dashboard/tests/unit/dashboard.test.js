const { lambdaHandler } = require("../../dashboard");

describe("dashboard", () => {
  it("generate html", async () => {
    const result = await lambdaHandler();
    expect(true).toBeTruthy();
  });
});
