const { sensorModel } = require("./sensorModel");

/**
 * getSensorData
 * Generates a random token of LENGTH using CHARSET
 * @param event
 * @param context
 * @returns {Promise<{error: boolean, statusCode: number, token: string}>}
 */
exports.lambdaHandler = async (event, context) => {
  const sensorData = sensorModel();
  return { ...event, sensorData };
};
