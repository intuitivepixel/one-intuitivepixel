/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Filter = require('broccoli-filter');

function CopyrightFilter(inputNode) {
  Filter.call(this, inputNode);
}

CopyrightFilter.prototype = Object.create(Filter.prototype);

CopyrightFilter.prototype.processString = function(existingString) {
  var c = `
  /*
   * Copyright (c) 2017 Alessandro D\'Aquino
   * ${new Date().toString()}
   */\n${existingString}`;
  return c;
}

CopyrightFilter.prototype.extensions = ['js'];
CopyrightFilter.prototype.targetExtension = ['js'];

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return new CopyrightFilter(app.toTree());
};
