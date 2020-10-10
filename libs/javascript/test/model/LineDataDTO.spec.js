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
    instance = new QumranicaApiConnector.LineDataDTO();
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

  describe('LineDataDTO', function() {
    it('should create an instance of LineDataDTO', function() {
      // uncomment below and update the code to test LineDataDTO
      //var instane = new QumranicaApiConnector.LineDataDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.LineDataDTO);
    });

    it('should have the property lineId (base name: "lineId")', function() {
      // uncomment below and update the code to test the property lineId
      //var instane = new QumranicaApiConnector.LineDataDTO();
      //expect(instance).to.be();
    });

    it('should have the property lineName (base name: "lineName")', function() {
      // uncomment below and update the code to test the property lineName
      //var instane = new QumranicaApiConnector.LineDataDTO();
      //expect(instance).to.be();
    });

  });

}));
