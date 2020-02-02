module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'spec/**/*Spec.js', watched: false }
    ],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['Chrome'],
    browserConsoleLogOptions: {
      terminal: true
    },
  })
};
