const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!axios)'],
  moduleNameMapper: {
    '\\.(css|less|scss|png)$': 'identity-obj-proxy',
  },

  // Specify the path to your Babel configuration file
  // Replace "path/to/.babelrc" with the actual path to your .babelrc file
};

module.exports = config;
