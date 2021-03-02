const Dotenv = require('dotenv-webpack');
module.exports = {
    transpileDependencies: ['vuex-persist'],
    configureWebpack: {
      plugins: [
        new Dotenv()
      ]
    }
  }