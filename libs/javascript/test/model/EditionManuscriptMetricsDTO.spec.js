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
    instance = new SqeApi.EditionManuscriptMetricsDTO();
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

  describe('EditionManuscriptMetricsDTO', function() {
    it('should create an instance of EditionManuscriptMetricsDTO', function() {
      // uncomment below and update the code to test EditionManuscriptMetricsDTO
      //var instane = new SqeApi.EditionManuscriptMetricsDTO();
      //expect(instance).to.be.a(SqeApi.EditionManuscriptMetricsDTO);
    });

    it('should have the property ppi (base name: "ppi")', function() {
      // uncomment below and update the code to test the property ppi
      //var instane = new SqeApi.EditionManuscriptMetricsDTO();
      //expect(instance).to.be();
    });

    it('should have the property editorId (base name: "editorId")', function() {
      // uncomment below and update the code to test the property editorId
      //var instane = new SqeApi.EditionManuscriptMetricsDTO();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instane = new SqeApi.EditionManuscriptMetricsDTO();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new SqeApi.EditionManuscriptMetricsDTO();
      //expect(instance).to.be();
    });

    it('should have the property xOrigin (base name: "xOrigin")', function() {
      // uncomment below and update the code to test the property xOrigin
      //var instane = new SqeApi.EditionManuscriptMetricsDTO();
      //expect(instance).to.be();
    });

    it('should have the property yOrigin (base name: "yOrigin")', function() {
      // uncomment below and update the code to test the property yOrigin
      //var instane = new SqeApi.EditionManuscriptMetricsDTO();
      //expect(instance).to.be();
    });

  });

}));