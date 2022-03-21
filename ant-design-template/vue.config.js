const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    before: require('./mock/index.ts'),
    open: true,
    host: '0.0.0.0',
    port: 4455,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        secure: false,
        // ws: true, // proxy websockets
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'design vue';
      return args;
    });
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
