const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['youtube.com', 'i.ytimg.com'],
  },
  env: {
    AI_SERVICE_URL: process.env.AI_SERVICE_URL,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};