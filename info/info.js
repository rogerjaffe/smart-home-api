/**
 * auth
 * Generates a random token of LENGTH using CHARSET
 * @param event
 * @param context
 * @returns {Promise<{error: boolean, statusCode: number, token: string}>}
 */
exports.lambdaHandler = async (event, context) => {
  return {...event, systemInformation:
    {
      name: 'Patrick Henry',
      systemId: 'ABC-123-Z'
    }
  }
};
