const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  transpileDependencies: ['vuetify']
}

module.exports = {
  configureWebpack: (config) => {
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/', '/about'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event'
          })
        })
      ]
    }
  }
}
