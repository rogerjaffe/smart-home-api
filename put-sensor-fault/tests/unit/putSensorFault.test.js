const { lambdaHandler } = require("../../putSensorFault");

describe("getSensorFault", () => {
  let newValue, sensorModel, sensorId;

  beforeEach(() => {
    newValue = true;
    sensorId = "OYXIUPTT";
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
      sensorId,
      newValue: newValue,
    });
    expect(result.sensorData[1].fault).toBeTruthy();
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
