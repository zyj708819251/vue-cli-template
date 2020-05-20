module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'prod'
    ? './' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/scss/scss.scss";'
      }
    }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/devApi': {
        target: process.env.VUE_APP_URL, // target host
        ws: false, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        pathRewrite: {
          '^/devApi': ''
        }
      }
    }
  }
}
