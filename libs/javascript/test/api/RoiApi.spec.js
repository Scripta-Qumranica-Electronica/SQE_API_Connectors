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
    instance = new SqeApi.RoiApi();
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

  describe('RoiApi', function() {
    describe('v1EditionsEditionIdRoisBatchEditPost', function() {
      it('should call v1EditionsEditionIdRoisBatchEditPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdRoisBatchEditPost
        //instance.v1EditionsEditionIdRoisBatchEditPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdRoisBatchPost', function() {
      it('should call v1EditionsEditionIdRoisBatchPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdRoisBatchPost
        //instance.v1EditionsEditionIdRoisBatchPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdRoisBatchPut', function() {
      it('should call v1EditionsEditionIdRoisBatchPut successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdRoisBatchPut
        //instance.v1EditionsEditionIdRoisBatchPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdRoisPost', function() {
      it('should call v1EditionsEditionIdRoisPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdRoisPost
        //instance.v1EditionsEditionIdRoisPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdRoisRoiIdDelete', function() {
      it('should call v1EditionsEditionIdRoisRoiIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdRoisRoiIdDelete
        //instance.v1EditionsEditionIdRoisRoiIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdRoisRoiIdGet', function() {
      it('should call v1EditionsEditionIdRoisRoiIdGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdRoisRoiIdGet
        //instance.v1EditionsEditionIdRoisRoiIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdRoisRoiIdPut', function() {
      it('should call v1EditionsEditionIdRoisRoiIdPut successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdRoisRoiIdPut
        //instance.v1EditionsEditionIdRoisRoiIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));