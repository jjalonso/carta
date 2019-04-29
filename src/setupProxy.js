const proxy = require('http-proxy-middleware');

function setup(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:5000',
      pathRewrite: {
        '/api': '/carta-ec41c/us-central1',
      },
    }),
  );
}

module.exports = setup;
