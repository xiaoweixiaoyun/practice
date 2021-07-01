const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/', //my-app：项目名
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 4455,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://yapi.trechina.cn',
        changeOrigin: true,
        secure: false,
        // ws: true, // proxy websockets
        pathRewrite: {
          '^/api': '/mock/646/api'
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      //css检查
      new StyleLintPlugin({
        files: ['**/*.{html,vue,css,sass,scss,less}']
      })
    ]
  },
  //css全局式样
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/styles/global.less')]
    }
  },
  //Ant Design Vue全局式样
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  //图标
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
};