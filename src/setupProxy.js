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
      target: 'https://kapi.kakao.com',
      changeOrigin: true,
    })
  );
}