const Dotenv = require('dotenv-webpack');
module.exports = {
    transpileDependencies: [
      'vuex-persist',
      'vuetify'
    ],
    configureWebpack: {
      plugins: [
        new Dotenv()
      ]
    }
  }
