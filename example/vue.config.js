const path = require('path');
const autoprefixer = require('autoprefixer');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const isProd = process.env.NODE_ENV !== 'production';

module.exports = {
  publicPath: isProd ? './' : '/',

  lintOnSave: isProd,

  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: isProd,
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          // 自动添加浏览器前缀
          autoprefixer({}),
        ],
      },
      sass: {
        // scss全局引入
        prependData: `
           @import "@/style/_variables.scss";
        `,
      },
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },

  pluginOptions: {
    vconsole: {
      enable: true,
    },
  },
};
