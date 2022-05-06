// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://kapi.kakao.com',
//       changeOrigin: true,
//     //   onProxyReq(proxyReq, req, res) {
//     //     proxyReq.setHeader('Origin','http://localhost:80')
//     // },
//       // pathRewrite: { '^/api': '' }
//     })
//   );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    '/v1/payment',
    createProxyMiddleware({
      target: 'https://kapi.kakao.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/reactBackend',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
}