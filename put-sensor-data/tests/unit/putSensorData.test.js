const { lambdaHandler } = require("../../putSensorData");

describe("putSensorData", () => {
  let newValue, sensorModel;

  beforeEach(() => {
    newValue = 153;
    sensorModel = [
      {
        id: "UXBTUSGC",
        groupId: "water",
        groupName: "Water",
        description: "Water meter flow rate",
        fault: false,
        dataType: "number",
        value: 10,
      },
      {
        id: "OYXIUPTT",
        groupId: "water",
        groupName: "Water",
        description: "Water heater temperature",
        fault: false,
        dataType: "number",
        value: 20,
      },
      {
        id: "PHNLXUDA",
        groupId: "water",
        groupName: "Water",
        description: "Floor water sensor - bathroom 1",
        fault: false,
        dataType: "boolean",
        value: 30,
      },
    ];
  });

  it("replace a value", async () => {
    const result = await lambdaHandler({
      sensorData: sensorModel,
      sensorId: "PHNLXUDA",
      newValue: newValue,
    });
    expect(result.sensorData[2].value).toEqual(newValue);
  });

  it("sensor ID not found", async () => {
    const result = await lambdaHandler({
      sensorData: sensorModel,
      sensorId: "NOT_FOUND",
      newValue: newValue,
    });
    expect(result).toBeNull();
  });
});
