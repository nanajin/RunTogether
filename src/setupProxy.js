const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api', '/board', '/challenge', '/running'],
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  // app.use(
  //   '/board',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8080',
  //     changeOrigin: true,
  //   })
  // );
  // app.use(
  //   '/challenge',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8080',
  //     changeOrigin: true,
  //   })
  // );
  app.use(
    '/v1/payment',
    createProxyMiddleware({
      target: 'https://kapi.kakao.com',
      changeOrigin: true,
    })
  );
  // app.use(
  //   '/reactBackend',
  //   createProxyMiddleware({
  //     target: 'http://localhost:8000',
  //     changeOrigin: true,
  //   })
  // );
}