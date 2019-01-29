const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];
    return config;
  },
};
