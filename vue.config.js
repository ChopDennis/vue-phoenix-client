const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  transpileDependencies: ['vuetify'],
  // devServer: {
  //   port: 8082,
  //   proxy: {
  //     '/api': {
  //       target: 'https://strapi.machi.codes',
  //       changeOrigin: true,
  //       secure: true,
  //       ws: true,
  //       pathRewrite: { '^/api': '' },
  //       logLevel: 'debug'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         staticDir: path.join(__dirname, 'dist'),
  //         routes: ['/', '/about'],
  //         renderer: new Renderer({
  //           renderAfterDocumentEvent: 'render-event'
  //         })
  //       })
  //     ]
  //   }
  // }
}
