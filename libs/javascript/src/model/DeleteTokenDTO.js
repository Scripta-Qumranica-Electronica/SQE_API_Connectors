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

import ApiClient from '../ApiClient';

/**
 * The DeleteTokenDTO model module.
 * @module model/DeleteTokenDTO
 * @version 0.7.2
 */
class DeleteTokenDTO {
    /**
     * Constructs a new <code>DeleteTokenDTO</code>.
     * @alias module:model/DeleteTokenDTO
     * @param editionId {Number} 
     * @param token {String} 
     */
    constructor(editionId, token) { 
        
        DeleteTokenDTO.initialize(this, editionId, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, editionId, token) { 
        obj['editionId'] = editionId;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>DeleteTokenDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTokenDTO} obj Optional instance to populate.
     * @return {module:model/DeleteTokenDTO} The populated <code>DeleteTokenDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTokenDTO();

            if (data.hasOwnProperty('editionId')) {
                obj['editionId'] = ApiClient.convertToType(data['editionId'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} editionId
 */
DeleteTokenDTO.prototype['editionId'] = undefined;

/**
 * @member {String} token
 */
DeleteTokenDTO.prototype['token'] = undefined;






export default DeleteTokenDTO;

