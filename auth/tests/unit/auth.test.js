const { lambdaHandler } = require("../../auth");

describe("auth", () => {
  it("authenticated with any username / password", async () => {
    const result = await lambdaHandler({
      username: "username",
      password: "password",
    });
    expect(result.error).toBeFalsy();
  });

  it("authenticated with blank username", async () => {
    const result = await lambdaHandler({ username: "", password: "password" });
    expect(result).toHaveProperty("error");
    expect(result.msg).toBe("InvalidAuth");
  });

  it("authenticated with blank password", async () => {
    const result = await lambdaHandler({ username: "username", password: "" });
    expect(result).toHaveProperty("error");
    expect(result.msg).toBe("InvalidAuth");
  });

  it("authenticated with empty username", async () => {
    const result = await lambdaHandler({ password: "password" });
    expect(result).toHaveProperty("error");
    expect(result.msg).toBe("InvalidAuth");
  });

  it("authenticated with empty password", async () => {
    const result = await lambdaHandler({ username: "username" });
    expect(result).toHaveProperty("error");
    expect(result.msg).toBe("InvalidAuth");
  });
});
