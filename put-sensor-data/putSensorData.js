/**
 * put-sensor-data
 * Generates a random token of LENGTH using CHARSET
 * @param event {
 *  sensorData: TSensorData,
 *  sensorId: string,
 *  newValue: string | number | boolean
 * }
 * @param context
 * @returns {Promise<{error: boolean, statusCode: number, sensorData: TSensorData}>}
 */
exports.lambdaHandler = async (event, context) => {
  const { sensorData, sensorId, newValue } = event;
  const sensor = sensorData.find((sd) => sd.id === sensorId);
  if (!sensor) return null;
  sensor.value = newValue;
  return { ...event, sensorData };
};
