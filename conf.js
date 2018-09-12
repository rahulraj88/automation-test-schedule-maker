exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided
  //directConnect: true,
  //chromeDriver: 'E:/Selenium/chromedriver_win32/chromedriver.exe',
  //seleniumServerJar: 'E:/Selenium/selenium-server-standalone-3.13.0.jar',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./JSFilesLocation/Specs/spec3.js'],
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function () {
    //browser.ignoreSynchronization = true;

    browser.waitForAngularEnabled(false);
    by.addLocator('valueBind', function (bindingModel, opt_parentElement) {
      var using = opt_parentElement || document;
      var matches = using.querySelectorAll('*[value\\.bind="' + bindingModel + '"]');
      var result = undefined;

      if (matches.length === 0) {
        result = null;
      } else if (matches.length === 1) {
        result = matches[0];
      } else {
        result = matches;
      }

      return result;
    });
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
}