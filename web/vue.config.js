// Vue Configuration File
module.exports = {
  pwa: {
    name: 'Ahuutec App',
    themeColor: '#fafafa',
    msTileColor: '#fafafa',
    manifestOptions: {
      short_name: 'Ahuutec',
      background_color: '#fafafa'
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
