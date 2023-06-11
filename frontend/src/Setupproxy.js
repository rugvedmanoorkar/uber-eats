const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/', {
      target: process.env.PROD ? `http://${process.env.BACKEND}:3001` : "http://localhost:3001",
      secure: false
    })
  );
};