/**
 * auth
 * Generates a random token of LENGTH using CHARSET
 * @param event
 * @param context
 * @returns {Promise<{error: boolean, statusCode: number, token: string}>}
 */
exports.lambdaHandler = async (event, context) => {
  const ONE_HOUR = 60 * 60;
  const datetime = Math.trunc(new Date().valueOf() / 1000) + ONE_HOUR + "";
  return { ...event, datetime };
};
