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
    instance = new QumranicaApiConnector.EditionApi();
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

  describe('EditionApi', function() {
    describe('v1EditionsAdminShareRequestsGet', function() {
      it('should call v1EditionsAdminShareRequestsGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsAdminShareRequestsGet
        //instance.v1EditionsAdminShareRequestsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsConfirmEditorshipTokenPost', function() {
      it('should call v1EditionsConfirmEditorshipTokenPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsConfirmEditorshipTokenPost
        //instance.v1EditionsConfirmEditorshipTokenPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdAddEditorRequestPost', function() {
      it('should call v1EditionsEditionIdAddEditorRequestPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdAddEditorRequestPost
        //instance.v1EditionsEditionIdAddEditorRequestPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdDelete', function() {
      it('should call v1EditionsEditionIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdDelete
        //instance.v1EditionsEditionIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdEditorsEditorEmailIdPut', function() {
      it('should call v1EditionsEditionIdEditorsEditorEmailIdPut successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdEditorsEditorEmailIdPut
        //instance.v1EditionsEditionIdEditorsEditorEmailIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdGet', function() {
      it('should call v1EditionsEditionIdGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdGet
        //instance.v1EditionsEditionIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdPost', function() {
      it('should call v1EditionsEditionIdPost successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdPost
        //instance.v1EditionsEditionIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdPut', function() {
      it('should call v1EditionsEditionIdPut successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdPut
        //instance.v1EditionsEditionIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdScriptCollectionGet', function() {
      it('should call v1EditionsEditionIdScriptCollectionGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdScriptCollectionGet
        //instance.v1EditionsEditionIdScriptCollectionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditionIdScriptLinesGet', function() {
      it('should call v1EditionsEditionIdScriptLinesGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditionIdScriptLinesGet
        //instance.v1EditionsEditionIdScriptLinesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsEditorInvitationsGet', function() {
      it('should call v1EditionsEditorInvitationsGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsEditorInvitationsGet
        //instance.v1EditionsEditorInvitationsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1EditionsGet', function() {
      it('should call v1EditionsGet successfully', function(done) {
        //uncomment below and update the code to test v1EditionsGet
        //instance.v1EditionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
