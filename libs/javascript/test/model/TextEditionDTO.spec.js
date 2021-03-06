/**
 * SQE API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QumranicaApiConnector);
  }
}(this, function(expect, QumranicaApiConnector) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QumranicaApiConnector.TextEditionDTO();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TextEditionDTO', function() {
    it('should create an instance of TextEditionDTO', function() {
      // uncomment below and update the code to test TextEditionDTO
      //var instane = new QumranicaApiConnector.TextEditionDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.TextEditionDTO);
    });

    it('should have the property manuscriptId (base name: "manuscriptId")', function() {
      // uncomment below and update the code to test the property manuscriptId
      //var instane = new QumranicaApiConnector.TextEditionDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionName (base name: "editionName")', function() {
      // uncomment below and update the code to test the property editionName
      //var instane = new QumranicaApiConnector.TextEditionDTO();
      //expect(instance).to.be();
    });

    it('should have the property editorId (base name: "editorId")', function() {
      // uncomment below and update the code to test the property editorId
      //var instane = new QumranicaApiConnector.TextEditionDTO();
      //expect(instance).to.be();
    });

    it('should have the property licence (base name: "licence")', function() {
      // uncomment below and update the code to test the property licence
      //var instane = new QumranicaApiConnector.TextEditionDTO();
      //expect(instance).to.be();
    });

    it('should have the property editors (base name: "editors")', function() {
      // uncomment below and update the code to test the property editors
      //var instane = new QumranicaApiConnector.TextEditionDTO();
      //expect(instance).to.be();
    });

    it('should have the property textFragments (base name: "textFragments")', function() {
      // uncomment below and update the code to test the property textFragments
      //var instane = new QumranicaApiConnector.TextEditionDTO();
      //expect(instance).to.be();
    });

  });

}));
