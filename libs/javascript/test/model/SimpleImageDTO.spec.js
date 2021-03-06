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
    instance = new QumranicaApiConnector.SimpleImageDTO();
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

  describe('SimpleImageDTO', function() {
    it('should create an instance of SimpleImageDTO', function() {
      // uncomment below and update the code to test SimpleImageDTO
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.SimpleImageDTO);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property lightingType (base name: "lightingType")', function() {
      // uncomment below and update the code to test the property lightingType
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property lightingDirection (base name: "lightingDirection")', function() {
      // uncomment below and update the code to test the property lightingDirection
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property waveLength (base name: "waveLength")', function() {
      // uncomment below and update the code to test the property waveLength
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property side (base name: "side")', function() {
      // uncomment below and update the code to test the property side
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property ppi (base name: "ppi")', function() {
      // uncomment below and update the code to test the property ppi
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property master (base name: "master")', function() {
      // uncomment below and update the code to test the property master
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

    it('should have the property catalogNumber (base name: "catalogNumber")', function() {
      // uncomment below and update the code to test the property catalogNumber
      //var instane = new QumranicaApiConnector.SimpleImageDTO();
      //expect(instance).to.be();
    });

  });

}));
