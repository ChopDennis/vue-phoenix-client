const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: (config) => {
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event'
          })
        })
      ]
    }
  }
}
