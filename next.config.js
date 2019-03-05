const withTypescript = require('@zeit/next-typescript');
const withOffline = require('next-offline');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS(
  withImages(
    withTypescript({
      webpack(config, options) {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['lib'] = path.join(__dirname, 'lib');
        config.resolve.alias['static'] = path.join(__dirname, 'static');
        return config;
      },
    })
  )
);
