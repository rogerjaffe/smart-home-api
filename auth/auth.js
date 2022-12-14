/**
 * auth
 * Generates a random token of LENGTH using CHARSET
 * @param event
 * @param context
 * @returns {Promise<{error: boolean, statusCode: number, token: string}>}
 */
exports.lambdaHandler = async (event, context) => {
  const { username, password } = event;

  // Do the authentication here!!
  const error =
    !username || !password || username.length * password.length === 0;
  if (error) {
    return { ...event, error: true, msg: "InvalidAuth" };
  } else {
    return { ...event, error: false };
  }
};
