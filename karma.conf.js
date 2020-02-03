module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: ['webpack', 'karma-jasmine', 'karma-webpack', 'karma-chrome-launcher'],
    frameworks: ['jasmine'],
    files: [
      { pattern: 'spec/**/*Spec.js', watched: false }
    ],
    preprocessors: {
      'spec/**/*Spec.js': ['webpack'],
    },
    webpack: require('./webpack.dev.js'),
    webpackMiddleware: {
      stats: 'errors-only',
    },
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['Chrome'],
    browserConsoleLogOptions: {
      terminal: true
    },
  })
};
