// FIRST TIME ONLY- run:
//   ./node_modules/.bin/webdriver-manager update
//
//   Try: `npm run webdriver:update`
//
// AND THEN EVERYTIME ...
//   1. Compile with `tsc`
//   2. Make sure the test server (e.g., http-server: localhost:8080) is running.
//   3. ./node_modules/.bin/protractor protractor.config.js
//
//   To do all steps, try:  `npm run e2e`

var fs = require('fs');
var path = require('canonical-path');
var _ = require('lodash');
var SauceLabs = require('saucelabs');
var browserstack = require('browserstack-local');


exports.config = {

    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    sauceUser: 'IvanZakazmadan',
    sauceKey: '36647d4a-ff1a-465c-9bef-4492519cf871',

    'capabilities': {
        'browserstack.user': 'ivan1213',
        'browserstack.key': 'AyEDqBveLnz6YduGHGSq',
        'browserName': 'chrome',
        'build': 'version1',
        'project': 'newintropage',
        'browserstack.local': true
        },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to this config file
  specs: ['app/*e2e-spec.js' ],

    beforeLaunch: function() {
        console.log("Connecting local");
        return new Promise(function(resolve, reject){
            exports.bs_local = new browserstack.Local();
            exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
                if (error) return reject(error);
                console.log('Connected. Now testing...');

                resolve();
            });
        });
    },

    // Code to stop browserstack local after end of test
    afterLaunch: function(){
        return new Promise(function(resolve, reject){
            exports.bs_local.stop(resolve);
        });
    },

  // For angular tests
  useAllAngular2AppRoots: true,

   allScriptsTimeout: 30000,
   getPageTimeout: 30000,

  // Base URL for application server
  baseUrl: 'http://localhost:8080',

  // doesn't seem to work.
  // resultJsonOutputFile: "foo.json",

  onPrepare: function() {
    //// SpecReporter
    //var SpecReporter = require('jasmine-spec-reporter');
    //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'none'}));
    //// jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

    
      browser.ignoreSynchronization = false;	 	 
   
    // debugging
    //console.log('browser.params:' + JSON.stringify(browser.params));
    //jasmine.getEnv().addReporter(new Reporter( browser.params )) ;

    // Allow changing bootstrap mode to NG1 for upgrade tests
    //global.setProtractorToNg1Mode = function() {
    //  browser.useAllAngular2AppRoots = false;
    //  browser.rootEl = 'html';
    //};
  },

  jasmineNodeOpts: {
    // defaultTimeoutInterval: 60000,
    isVerbose: true,
    includeStackTrace: true,
    showColors: true,
    defaultTimeoutInterval: 72000,
    showTiming: true,
    print: function () {}
  }
};

// Custom reporter
function Reporter(options) {

}
