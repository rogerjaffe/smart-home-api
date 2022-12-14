const { lambdaHandler } = require("../../convertIsoTime");

describe("convertIsoTime", () => {
  it("generates a timestamp", async () => {
    const result = await lambdaHandler({
      username: "username",
      password: "password",
    });
    expect(result).toHaveProperty("datetime");
  });
});
