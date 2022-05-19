/// <reference types="cypress" />
const { startDevServer } = require('@cypress/vite-dev-server');

module.exports = (on, config) => {
  on('dev-server:start', options => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: 'vite.config.ts',
      },
    });
  });

  return config;
};
