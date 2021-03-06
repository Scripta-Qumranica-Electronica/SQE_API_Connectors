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
    instance = new QumranicaApiConnector.NewUserRequestDTO();
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

  describe('NewUserRequestDTO', function() {
    it('should create an instance of NewUserRequestDTO', function() {
      // uncomment below and update the code to test NewUserRequestDTO
      //var instane = new QumranicaApiConnector.NewUserRequestDTO();
      //expect(instance).to.be.a(QumranicaApiConnector.NewUserRequestDTO);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new QumranicaApiConnector.NewUserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new QumranicaApiConnector.NewUserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instane = new QumranicaApiConnector.NewUserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property forename (base name: "forename")', function() {
      // uncomment below and update the code to test the property forename
      //var instane = new QumranicaApiConnector.NewUserRequestDTO();
      //expect(instance).to.be();
    });

    it('should have the property surname (base name: "surname")', function() {
      // uncomment below and update the code to test the property surname
      //var instane = new QumranicaApiConnector.NewUserRequestDTO();
      //expect(instance).to.be();
    });

  });

}));
