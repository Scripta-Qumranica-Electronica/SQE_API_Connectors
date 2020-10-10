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
    instance = new QumranicaApiConnector.CreateAttributeDTO();
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

  describe('CreateAttributeDTO', function() {
    it('should create an instance of CreateAttributeDTO', function() {
      // uncomment below and update the code to test CreateAttributeDTO
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.CreateAttributeDTO);
    });

    it('should have the property attributeName (base name: "attributeName")', function() {
      // uncomment below and update the code to test the property attributeName
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property editable (base name: "editable")', function() {
      // uncomment below and update the code to test the property editable
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property removable (base name: "removable")', function() {
      // uncomment below and update the code to test the property removable
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property repeatable (base name: "repeatable")', function() {
      // uncomment below and update the code to test the property repeatable
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property batchEditable (base name: "batchEditable")', function() {
      // uncomment below and update the code to test the property batchEditable
      //var instane = new QumranicaApiConnector.CreateAttributeDTO();
      //expect(instance).to.be();
    });

  });

}));
