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
    instance = new QumranicaApiConnector.InterpretationAttributeDTO();
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

  describe('InterpretationAttributeDTO', function() {
    it('should create an instance of InterpretationAttributeDTO', function() {
      // uncomment below and update the code to test InterpretationAttributeDTO
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.InterpretationAttributeDTO);
    });

    it('should have the property interpretationAttributeId (base name: "interpretationAttributeId")', function() {
      // uncomment below and update the code to test the property interpretationAttributeId
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property attributeString (base name: "attributeString")', function() {
      // uncomment below and update the code to test the property attributeString
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property attributeValueString (base name: "attributeValueString")', function() {
      // uncomment below and update the code to test the property attributeValueString
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property creatorId (base name: "creatorId")', function() {
      // uncomment below and update the code to test the property creatorId
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property editorId (base name: "editorId")', function() {
      // uncomment below and update the code to test the property editorId
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property commentary (base name: "commentary")', function() {
      // uncomment below and update the code to test the property commentary
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property attributeId (base name: "attributeId")', function() {
      // uncomment below and update the code to test the property attributeId
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

    it('should have the property attributeValueId (base name: "attributeValueId")', function() {
      // uncomment below and update the code to test the property attributeValueId
      //var instane = new QumranicaApiConnector.InterpretationAttributeDTO();
      //expect(instance).to.be();
    });

  });

}));
