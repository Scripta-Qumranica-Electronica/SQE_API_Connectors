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


import ApiClient from "../ApiClient";
import ArtefactDTO from '../model/ArtefactDTO';
import ArtefactGroupDTO from '../model/ArtefactGroupDTO';
import ArtefactGroupListDTO from '../model/ArtefactGroupListDTO';
import ArtefactListDTO from '../model/ArtefactListDTO';
import ArtefactTextFragmentMatchListDTO from '../model/ArtefactTextFragmentMatchListDTO';
import BatchUpdateArtefactPlacementDTO from '../model/BatchUpdateArtefactPlacementDTO';
import BatchUpdatedArtefactTransformDTO from '../model/BatchUpdatedArtefactTransformDTO';
import CreateArtefactDTO from '../model/CreateArtefactDTO';
import CreateArtefactGroupDTO from '../model/CreateArtefactGroupDTO';
import DeleteDTO from '../model/DeleteDTO';
import InterpretationRoiDTOList from '../model/InterpretationRoiDTOList';
import UpdateArtefactDTO from '../model/UpdateArtefactDTO';
import UpdateArtefactGroupDTO from '../model/UpdateArtefactGroupDTO';

/**
* Artefact service.
* @module api/ArtefactApi
* @version v1
*/
export default class ArtefactApi {

    /**
    * Constructs a new ArtefactApi. 
    * @alias module:api/ArtefactApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsArtefactGroupIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified artefact group.
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactGroupId Unique Id of the artefact group to be deleted
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsArtefactGroupIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteDTO}
     */
    v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(editionId, artefactGroupId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete");
      }
      // verify the required parameter 'artefactGroupId' is set
      if (artefactGroupId === undefined || artefactGroupId === null) {
        throw new Error("Missing the required parameter 'artefactGroupId' when calling v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactGroupId': artefactGroupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = DeleteDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefact-groups/{artefactGroupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsArtefactGroupIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactGroupDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the details of a specific artefact group in the edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactGroupId Id of the desired artefact group
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsArtefactGroupIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactGroupDTO}
     */
    v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(editionId, artefactGroupId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet");
      }
      // verify the required parameter 'artefactGroupId' is set
      if (artefactGroupId === undefined || artefactGroupId === null) {
        throw new Error("Missing the required parameter 'artefactGroupId' when calling v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactGroupId': artefactGroupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactGroupDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefact-groups/{artefactGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsArtefactGroupIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactGroupDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactGroupId Id of the artefact group to be updated
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateArtefactGroupDTO} opts.updateArtefactGroupDTO Parameters that the artefact group should be changed to
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsArtefactGroupIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactGroupDTO}
     */
    v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(editionId, artefactGroupId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateArtefactGroupDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut");
      }
      // verify the required parameter 'artefactGroupId' is set
      if (artefactGroupId === undefined || artefactGroupId === null) {
        throw new Error("Missing the required parameter 'artefactGroupId' when calling v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactGroupId': artefactGroupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactGroupDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefact-groups/{artefactGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactGroupsGet operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactGroupListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a listing of all artefact groups in the edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactGroupListDTO}
     */
    v1EditionsEditionIdArtefactGroupsGet(editionId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactGroupsGet");
      }

      let pathParams = {
        'editionId': editionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactGroupListDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefact-groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactGroupsPost operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactGroupDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateArtefactGroupDTO} opts.createArtefactGroupDTO Parameters of the new artefact group
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactGroupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactGroupDTO}
     */
    v1EditionsEditionIdArtefactGroupsPost(editionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createArtefactGroupDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactGroupsPost");
      }

      let pathParams = {
        'editionId': editionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactGroupDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefact-groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsArtefactIdDelete operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified artefact
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactId Unique Id of the desired artefact
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1EditionsEditionIdArtefactsArtefactIdDelete(editionId, artefactId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsArtefactIdDelete");
      }
      // verify the required parameter 'artefactId' is set
      if (artefactId === undefined || artefactId === null) {
        throw new Error("Missing the required parameter 'artefactId' when calling v1EditionsEditionIdArtefactsArtefactIdDelete");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactId': artefactId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts/{artefactId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsArtefactIdGet operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides a listing of all artefacts that are part of the specified edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactId Unique Id of the desired artefact
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optional Add \"masks\" to include artefact polygons and \"images\" to include image data
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactDTO}
     */
    v1EditionsEditionIdArtefactsArtefactIdGet(editionId, artefactId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsArtefactIdGet");
      }
      // verify the required parameter 'artefactId' is set
      if (artefactId === undefined || artefactId === null) {
        throw new Error("Missing the required parameter 'artefactId' when calling v1EditionsEditionIdArtefactsArtefactIdGet");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactId': artefactId
      };
      let queryParams = {
        'optional': this.apiClient.buildCollectionParam(opts['optional'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts/{artefactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsArtefactIdPut operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \"\" will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactId Unique Id of the desired artefact
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateArtefactDTO} opts.updateArtefactDTO An UpdateArtefactDTO with the desired alterations to the artefact
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactDTO}
     */
    v1EditionsEditionIdArtefactsArtefactIdPut(editionId, artefactId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateArtefactDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsArtefactIdPut");
      }
      // verify the required parameter 'artefactId' is set
      if (artefactId === undefined || artefactId === null) {
        throw new Error("Missing the required parameter 'artefactId' when calling v1EditionsEditionIdArtefactsArtefactIdPut");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactId': artefactId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts/{artefactId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsArtefactIdRoisGet operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdRoisGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterpretationRoiDTOList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides a listing of all rois belonging to an artefact in the specified edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactId Unique Id of the desired artefact
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdRoisGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterpretationRoiDTOList}
     */
    v1EditionsEditionIdArtefactsArtefactIdRoisGet(editionId, artefactId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsArtefactIdRoisGet");
      }
      // verify the required parameter 'artefactId' is set
      if (artefactId === undefined || artefactId === null) {
        throw new Error("Missing the required parameter 'artefactId' when calling v1EditionsEditionIdArtefactsArtefactIdRoisGet");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactId': artefactId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = InterpretationRoiDTOList;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts/{artefactId}/rois', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactTextFragmentMatchListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \"suggested\", this endpoint will also return  any text fragment that the system suggests might have text in the artefact.
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Number} artefactId Unique Id of the desired artefact
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optional Add \"suggested\" to include possible matches suggested by the system
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactTextFragmentMatchListDTO}
     */
    v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(editionId, artefactId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet");
      }
      // verify the required parameter 'artefactId' is set
      if (artefactId === undefined || artefactId === null) {
        throw new Error("Missing the required parameter 'artefactId' when calling v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet");
      }

      let pathParams = {
        'editionId': editionId,
        'artefactId': artefactId
      };
      let queryParams = {
        'optional': this.apiClient.buildCollectionParam(opts['optional'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactTextFragmentMatchListDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts/{artefactId}/text-fragments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsBatchTransformationPost operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsBatchTransformationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BatchUpdatedArtefactTransformDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the positional data for a batch of artefacts
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {module:model/BatchUpdateArtefactPlacementDTO} opts.batchUpdateArtefactPlacementDTO A BatchUpdateArtefactTransformDTO with a list of the desired updates
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsBatchTransformationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BatchUpdatedArtefactTransformDTO}
     */
    v1EditionsEditionIdArtefactsBatchTransformationPost(editionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['batchUpdateArtefactPlacementDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsBatchTransformationPost");
      }

      let pathParams = {
        'editionId': editionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = BatchUpdatedArtefactTransformDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts/batch-transformation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsGet operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides a listing of all artefacts that are part of the specified edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optional Add \"masks\" to include artefact polygons and \"images\" to include image data
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactListDTO}
     */
    v1EditionsEditionIdArtefactsGet(editionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsGet");
      }

      let pathParams = {
        'editionId': editionId
      };
      let queryParams = {
        'optional': this.apiClient.buildCollectionParam(opts['optional'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactListDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdArtefactsPost operation.
     * @callback module:api/ArtefactApi~v1EditionsEditionIdArtefactsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtefactDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \"POLYGON((0 0,1 1,1 0,0 0))\" (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateArtefactDTO} opts.createArtefactDTO A CreateArtefactDTO with the data for the new artefact
     * @param {module:api/ArtefactApi~v1EditionsEditionIdArtefactsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtefactDTO}
     */
    v1EditionsEditionIdArtefactsPost(editionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createArtefactDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdArtefactsPost");
      }

      let pathParams = {
        'editionId': editionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ArtefactDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/artefacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}