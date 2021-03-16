const { createProxyMiddleware } = require('http-proxy-middleware')

// 导出一个中间件函数
module.exports = createProxyMiddleware({
    target: 'http://fullstack.net.cn',
    changeOrigin: true,
  })
