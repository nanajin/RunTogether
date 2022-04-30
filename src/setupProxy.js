const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:80',
      changeOrigin: true,
    //   onProxyReq(proxyReq, req, res) {
    //     proxyReq.setHeader('Origin','http://localhost:80')
    // },
      // pathRewrite: { '^/api': '' }
    })
  );
};