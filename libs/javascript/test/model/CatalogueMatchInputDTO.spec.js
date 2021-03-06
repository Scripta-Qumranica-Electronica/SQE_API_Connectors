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
    instance = new QumranicaApiConnector.CatalogueMatchInputDTO();
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

  describe('CatalogueMatchInputDTO', function() {
    it('should create an instance of CatalogueMatchInputDTO', function() {
      // uncomment below and update the code to test CatalogueMatchInputDTO
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.CatalogueMatchInputDTO);
    });

    it('should have the property catalogSide (base name: "catalogSide")', function() {
      // uncomment below and update the code to test the property catalogSide
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property imagedObjectId (base name: "imagedObjectId")', function() {
      // uncomment below and update the code to test the property imagedObjectId
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property manuscriptId (base name: "manuscriptId")', function() {
      // uncomment below and update the code to test the property manuscriptId
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionName (base name: "editionName")', function() {
      // uncomment below and update the code to test the property editionName
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionVolume (base name: "editionVolume")', function() {
      // uncomment below and update the code to test the property editionVolume
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionLocation1 (base name: "editionLocation1")', function() {
      // uncomment below and update the code to test the property editionLocation1
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionLocation2 (base name: "editionLocation2")', function() {
      // uncomment below and update the code to test the property editionLocation2
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionSide (base name: "editionSide")', function() {
      // uncomment below and update the code to test the property editionSide
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property textFragmentId (base name: "textFragmentId")', function() {
      // uncomment below and update the code to test the property textFragmentId
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionId (base name: "editionId")', function() {
      // uncomment below and update the code to test the property editionId
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

    it('should have the property confirmed (base name: "confirmed")', function() {
      // uncomment below and update the code to test the property confirmed
      //var instane = new QumranicaApiConnector.CatalogueMatchInputDTO();
      //expect(instance).to.be();
    });

  });

}));
