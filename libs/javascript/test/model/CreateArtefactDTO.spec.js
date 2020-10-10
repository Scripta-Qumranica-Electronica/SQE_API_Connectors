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
    instance = new QumranicaApiConnector.CreateArtefactDTO();
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

  describe('CreateArtefactDTO', function() {
    it('should create an instance of CreateArtefactDTO', function() {
      // uncomment below and update the code to test CreateArtefactDTO
      //var instane = new QumranicaApiConnector.CreateArtefactDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.CreateArtefactDTO);
    });

    it('should have the property masterImageId (base name: "masterImageId")', function() {
      // uncomment below and update the code to test the property masterImageId
      //var instane = new QumranicaApiConnector.CreateArtefactDTO();
      //expect(instance).to.be();
    });

    it('should have the property mask (base name: "mask")', function() {
      // uncomment below and update the code to test the property mask
      //var instane = new QumranicaApiConnector.CreateArtefactDTO();
      //expect(instance).to.be();
    });

    it('should have the property placement (base name: "placement")', function() {
      // uncomment below and update the code to test the property placement
      //var instane = new QumranicaApiConnector.CreateArtefactDTO();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new QumranicaApiConnector.CreateArtefactDTO();
      //expect(instance).to.be();
    });

    it('should have the property statusMessage (base name: "statusMessage")', function() {
      // uncomment below and update the code to test the property statusMessage
      //var instane = new QumranicaApiConnector.CreateArtefactDTO();
      //expect(instance).to.be();
    });

  });

}));
