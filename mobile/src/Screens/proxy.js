const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/getTemplates', proxy({
    target: 'http://localhost:8080/getTemplates',
    changeOrigin: true,
  }));
};

module.exports = function(app) {
  app.use('/addUser', proxy({
    target: 'http://localhost:8080/addUser',
    changeOrigin: true,
  }));
};