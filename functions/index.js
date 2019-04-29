const functions = require('firebase-functions');

const { format, formatters } = require('./format-service');

exports.generateConclusion = functions.https.onRequest((request, response) => {
  if (request.method === 'POST') {
    const { values } = request.body;
    const risksConclusion = format(formatters.risks, values);
    const cognitiveConclusion = format(formatters.cognitive, values);

    response.send({
      cognitiveConclusion,
      risksConclusion,
    });
  } else {
    response.send('ERROR');
  }
});
