/**
 * auth
 * Generates a random token of LENGTH using CHARSET
 * @param event
 * @param context
 * @returns {Promise<{error: boolean, statusCode: number, token: string}>}
 */
// const html = `
// <!doctype html>
// <html lang="en">
//    <head>
//       <meta charset="utf-8">
//       <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
//       <meta name="theme-color" content="#000000">
//       <title>Smart Home Dashboard</title>
//       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
//    </head>
//    <script>
//      function onLoad() {
//        return console.log('abc');
//      }
//    </script>
//    <body onload="onLoad">
//       <div id="container">abc</div>
//    </body>
// </html>
// `
const fs = require('fs');
exports.lambdaHandler = async (event, context) => {
  const html = fs.readFileSync('./index.html', 'utf-8');
  return html;
};
