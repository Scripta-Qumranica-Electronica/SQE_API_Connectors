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
    instance = new SqeApi.ArtefactApi();
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

  describe('ArtefactApi', function() {
    describe('v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete', function() {
      it('should call v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete
        //instance.v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet', function() {
      it('should call v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet
        //instance.v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut', function() {
      it('should call v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut
        //instance.v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactGroupsGet', function() {
      it('should call v1EditionsEditionIdArtefactGroupsGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactGroupsGet
        //instance.v1EditionsEditionIdArtefactGroupsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactGroupsPost', function() {
      it('should call v1EditionsEditionIdArtefactGroupsPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactGroupsPost
        //instance.v1EditionsEditionIdArtefactGroupsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsArtefactIdDelete', function() {
      it('should call v1EditionsEditionIdArtefactsArtefactIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsArtefactIdDelete
        //instance.v1EditionsEditionIdArtefactsArtefactIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsArtefactIdGet', function() {
      it('should call v1EditionsEditionIdArtefactsArtefactIdGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsArtefactIdGet
        //instance.v1EditionsEditionIdArtefactsArtefactIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsArtefactIdPut', function() {
      it('should call v1EditionsEditionIdArtefactsArtefactIdPut successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsArtefactIdPut
        //instance.v1EditionsEditionIdArtefactsArtefactIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsArtefactIdRoisGet', function() {
      it('should call v1EditionsEditionIdArtefactsArtefactIdRoisGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsArtefactIdRoisGet
        //instance.v1EditionsEditionIdArtefactsArtefactIdRoisGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet', function() {
      it('should call v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet
        //instance.v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsBatchTransformationPost', function() {
      it('should call v1EditionsEditionIdArtefactsBatchTransformationPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsBatchTransformationPost
        //instance.v1EditionsEditionIdArtefactsBatchTransformationPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsGet', function() {
      it('should call v1EditionsEditionIdArtefactsGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsGet
        //instance.v1EditionsEditionIdArtefactsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdArtefactsPost', function() {
      it('should call v1EditionsEditionIdArtefactsPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdArtefactsPost
        //instance.v1EditionsEditionIdArtefactsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));