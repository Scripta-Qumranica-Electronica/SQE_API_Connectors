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
    instance = new QumranicaApiConnector.CatalogueMatchDTO();
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

  describe('CatalogueMatchDTO', function() {
    it('should create an instance of CatalogueMatchDTO', function() {
      // uncomment below and update the code to test CatalogueMatchDTO
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.CatalogueMatchDTO);
    });

    it('should have the property imageCatalogId (base name: "imageCatalogId")', function() {
      // uncomment below and update the code to test the property imageCatalogId
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property institution (base name: "institution")', function() {
      // uncomment below and update the code to test the property institution
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property catalogueNumber1 (base name: "catalogueNumber1")', function() {
      // uncomment below and update the code to test the property catalogueNumber1
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property catalogueNumber2 (base name: "catalogueNumber2")', function() {
      // uncomment below and update the code to test the property catalogueNumber2
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property proxy (base name: "proxy")', function() {
      // uncomment below and update the code to test the property proxy
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property suffix (base name: "suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property thumbnail (base name: "thumbnail")', function() {
      // uncomment below and update the code to test the property thumbnail
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property license (base name: "license")', function() {
      // uncomment below and update the code to test the property license
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property iaaEditionCatalogueId (base name: "iaaEditionCatalogueId")', function() {
      // uncomment below and update the code to test the property iaaEditionCatalogueId
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property manuscriptName (base name: "manuscriptName")', function() {
      // uncomment below and update the code to test the property manuscriptName
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property matchAuthor (base name: "matchAuthor")', function() {
      // uncomment below and update the code to test the property matchAuthor
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property matchConfirmationAuthor (base name: "matchConfirmationAuthor")', function() {
      // uncomment below and update the code to test the property matchConfirmationAuthor
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property matchId (base name: "matchId")', function() {
      // uncomment below and update the code to test the property matchId
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property dateOfMatch (base name: "dateOfMatch")', function() {
      // uncomment below and update the code to test the property dateOfMatch
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property dateOfConfirmation (base name: "dateOfConfirmation")', function() {
      // uncomment below and update the code to test the property dateOfConfirmation
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property catalogSide (base name: "catalogSide")', function() {
      // uncomment below and update the code to test the property catalogSide
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property imagedObjectId (base name: "imagedObjectId")', function() {
      // uncomment below and update the code to test the property imagedObjectId
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property manuscriptId (base name: "manuscriptId")', function() {
      // uncomment below and update the code to test the property manuscriptId
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionName (base name: "editionName")', function() {
      // uncomment below and update the code to test the property editionName
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionVolume (base name: "editionVolume")', function() {
      // uncomment below and update the code to test the property editionVolume
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionLocation1 (base name: "editionLocation1")', function() {
      // uncomment below and update the code to test the property editionLocation1
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionLocation2 (base name: "editionLocation2")', function() {
      // uncomment below and update the code to test the property editionLocation2
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionSide (base name: "editionSide")', function() {
      // uncomment below and update the code to test the property editionSide
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property textFragmentId (base name: "textFragmentId")', function() {
      // uncomment below and update the code to test the property textFragmentId
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property editionId (base name: "editionId")', function() {
      // uncomment below and update the code to test the property editionId
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

    it('should have the property confirmed (base name: "confirmed")', function() {
      // uncomment below and update the code to test the property confirmed
      //var instane = new QumranicaApiConnector.CatalogueMatchDTO();
      //expect(instance).to.be();
    });

  });

}));
