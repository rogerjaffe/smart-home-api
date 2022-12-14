/**
 * generate-token
 * Generates a random token of LENGTH using CHARSET
 * @param event
 * @param context
 * @returns {Promise<{error: boolean, statusCode: number, token: string}>}
 */
exports.lambdaHandler = async (event, context) => {
  const {LENGTH, CHARSET} = require('./constants');
  const token = Array(LENGTH)
    .fill("")
    .map((c) => CHARSET.charAt(Math.trunc(Math.random() * CHARSET.length)))
    .join("");
  return { ...event, token };
};
