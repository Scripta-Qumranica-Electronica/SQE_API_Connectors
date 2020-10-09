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
import AdminEditorRequestListDTO from '../model/AdminEditorRequestListDTO';
import DeleteTokenDTO from '../model/DeleteTokenDTO';
import DetailedEditorRightsDTO from '../model/DetailedEditorRightsDTO';
import EditionCopyDTO from '../model/EditionCopyDTO';
import EditionDTO from '../model/EditionDTO';
import EditionGroupDTO from '../model/EditionGroupDTO';
import EditionListDTO from '../model/EditionListDTO';
import EditionScriptCollectionDTO from '../model/EditionScriptCollectionDTO';
import EditionScriptLinesDTO from '../model/EditionScriptLinesDTO';
import EditionUpdateRequestDTO from '../model/EditionUpdateRequestDTO';
import EditorInvitationListDTO from '../model/EditorInvitationListDTO';
import InviteEditorDTO from '../model/InviteEditorDTO';
import UpdateEditorRightsDTO from '../model/UpdateEditorRightsDTO';

/**
* Edition service.
* @module api/EditionApi
* @version v1
*/
export default class EditionApi {

    /**
    * Constructs a new EditionApi. 
    * @alias module:api/EditionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1EditionsAdminShareRequestsGet operation.
     * @callback module:api/EditionApi~v1EditionsAdminShareRequestsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdminEditorRequestListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of requests issued by the current user for other users  to become editors of a shared edition
     * @param {module:api/EditionApi~v1EditionsAdminShareRequestsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AdminEditorRequestListDTO}
     */
    v1EditionsAdminShareRequestsGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = AdminEditorRequestListDTO;
      return this.apiClient.callApi(
        '/v1/editions/admin-share-requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsConfirmEditorshipTokenPost operation.
     * @callback module:api/EditionApi~v1EditionsConfirmEditorshipTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetailedEditorRightsDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm addition of an editor to the specified edition
     * @param {String} token JWT for verifying the request confirmation
     * @param {module:api/EditionApi~v1EditionsConfirmEditorshipTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DetailedEditorRightsDTO}
     */
    v1EditionsConfirmEditorshipTokenPost(token, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling v1EditionsConfirmEditorshipTokenPost");
      }

      let pathParams = {
        'token': token
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
      let returnType = DetailedEditorRightsDTO;
      return this.apiClient.callApi(
        '/v1/editions/confirm-editorship/{token}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdAddEditorRequestPost operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdAddEditorRequestPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds an editor to the specified edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {module:model/InviteEditorDTO} opts.inviteEditorDTO JSON object with the attributes of the new editor
     * @param {module:api/EditionApi~v1EditionsEditionIdAddEditorRequestPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1EditionsEditionIdAddEditorRequestPost(editionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['inviteEditorDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdAddEditorRequestPost");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/add-editor-request', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdDelete operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteTokenDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides details about the specified edition and all accessible alternate editions
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.optional Optional parameters: 'deleteForAllEditors'
     * @param {String} opts.token token required when using optional 'deleteForAllEditors'
     * @param {module:api/EditionApi~v1EditionsEditionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteTokenDTO}
     */
    v1EditionsEditionIdDelete(editionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdDelete");
      }

      let pathParams = {
        'editionId': editionId
      };
      let queryParams = {
        'optional': this.apiClient.buildCollectionParam(opts['optional'], 'multi'),
        'token': opts['token']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = DeleteTokenDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdEditorsEditorEmailIdPut operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdEditorsEditorEmailIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetailedEditorRightsDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Changes the rights for an editor of the specified edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {String} editorEmailId Email address of the editor whose permissions are being changed
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateEditorRightsDTO} opts.updateEditorRightsDTO JSON object with the attributes of the new editor
     * @param {module:api/EditionApi~v1EditionsEditionIdEditorsEditorEmailIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DetailedEditorRightsDTO}
     */
    v1EditionsEditionIdEditorsEditorEmailIdPut(editionId, editorEmailId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateEditorRightsDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdEditorsEditorEmailIdPut");
      }
      // verify the required parameter 'editorEmailId' is set
      if (editorEmailId === undefined || editorEmailId === null) {
        throw new Error("Missing the required parameter 'editorEmailId' when calling v1EditionsEditionIdEditorsEditorEmailIdPut");
      }

      let pathParams = {
        'editionId': editionId,
        'editorEmailId': editorEmailId
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
      let returnType = DetailedEditorRightsDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/editors/{editorEmailId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdGet operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditionGroupDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides details about the specified edition and all accessible alternate editions
     * @param {Number} editionId Unique Id of the desired edition
     * @param {module:api/EditionApi~v1EditionsEditionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditionGroupDTO}
     */
    v1EditionsEditionIdGet(editionId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdGet");
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
      let returnType = EditionGroupDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdPost operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditionDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a copy of the specified edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {module:model/EditionCopyDTO} opts.editionCopyDTO JSON object with the attributes to be changed in the copied edition
     * @param {module:api/EditionApi~v1EditionsEditionIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditionDTO}
     */
    v1EditionsEditionIdPost(editionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['editionCopyDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdPost");
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
      let returnType = EditionDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdPut operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditionDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates data for the specified edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {Object} opts Optional parameters
     * @param {module:model/EditionUpdateRequestDTO} opts.editionUpdateRequestDTO JSON object with the attributes to be updated
     * @param {module:api/EditionApi~v1EditionsEditionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditionDTO}
     */
    v1EditionsEditionIdPut(editionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['editionUpdateRequestDTO'];
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdPut");
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
      let returnType = EditionDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdScriptCollectionGet operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdScriptCollectionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditionScriptCollectionDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides spatial data for all letters in the edition
     * @param {Number} editionId Unique Id of the desired edition
     * @param {module:api/EditionApi~v1EditionsEditionIdScriptCollectionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditionScriptCollectionDTO}
     */
    v1EditionsEditionIdScriptCollectionGet(editionId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdScriptCollectionGet");
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
      let returnType = EditionScriptCollectionDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/script-collection', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditionIdScriptLinesGet operation.
     * @callback module:api/EditionApi~v1EditionsEditionIdScriptLinesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditionScriptLinesDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides spatial data for all letters in the edition organized and oriented  by lines.
     * @param {Number} editionId Unique Id of the desired edition
     * @param {module:api/EditionApi~v1EditionsEditionIdScriptLinesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditionScriptLinesDTO}
     */
    v1EditionsEditionIdScriptLinesGet(editionId, callback) {
      let postBody = null;
      // verify the required parameter 'editionId' is set
      if (editionId === undefined || editionId === null) {
        throw new Error("Missing the required parameter 'editionId' when calling v1EditionsEditionIdScriptLinesGet");
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
      let returnType = EditionScriptLinesDTO;
      return this.apiClient.callApi(
        '/v1/editions/{editionId}/script-lines', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsEditorInvitationsGet operation.
     * @callback module:api/EditionApi~v1EditionsEditorInvitationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditorInvitationListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of invitations issued to the current user to become an editor of a shared edition
     * @param {module:api/EditionApi~v1EditionsEditorInvitationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditorInvitationListDTO}
     */
    v1EditionsEditorInvitationsGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = EditorInvitationListDTO;
      return this.apiClient.callApi(
        '/v1/editions/editor-invitations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1EditionsGet operation.
     * @callback module:api/EditionApi~v1EditionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EditionListDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provides a listing of all editions accessible to the current user
     * @param {module:api/EditionApi~v1EditionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EditionListDTO}
     */
    v1EditionsGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = EditionListDTO;
      return this.apiClient.callApi(
        '/v1/editions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
