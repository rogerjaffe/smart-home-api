const { lambdaHandler } = require("../../getSensorData");
const { sensorModel } = require("../../sensorModel");

describe("getSensorData", () => {
  it("generate a token", async () => {
    const result = await lambdaHandler();
    const ids = result.sensorData.map((sd) => sd.id);
    const expectedIds = sensorModel().map((sd) => sd.id);
    expect(ids).toStrictEqual(expectedIds);
  });
});
