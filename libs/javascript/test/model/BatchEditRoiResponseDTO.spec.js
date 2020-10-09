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
    factory(root.expect, root.SqeApi);
  }
}(this, function(expect, SqeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SqeApi.BatchEditRoiResponseDTO();
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

  describe('BatchEditRoiResponseDTO', function() {
    it('should create an instance of BatchEditRoiResponseDTO', function() {
      // uncomment below and update the code to test BatchEditRoiResponseDTO
      //var instane = new SqeApi.BatchEditRoiResponseDTO();
      //expect(instance).to.be.a(SqeApi.BatchEditRoiResponseDTO);
    });

    it('should have the property createRois (base name: "createRois")', function() {
      // uncomment below and update the code to test the property createRois
      //var instane = new SqeApi.BatchEditRoiResponseDTO();
      //expect(instance).to.be();
    });

    it('should have the property updateRois (base name: "updateRois")', function() {
      // uncomment below and update the code to test the property updateRois
      //var instane = new SqeApi.BatchEditRoiResponseDTO();
      //expect(instance).to.be();
    });

    it('should have the property deleteRois (base name: "deleteRois")', function() {
      // uncomment below and update the code to test the property deleteRois
      //var instane = new SqeApi.BatchEditRoiResponseDTO();
      //expect(instance).to.be();
    });

  });

}));