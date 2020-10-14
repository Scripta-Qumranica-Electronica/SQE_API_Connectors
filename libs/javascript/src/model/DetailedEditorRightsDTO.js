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
 * The DetailedEditorRightsDTO model module.
 * @module model/DetailedEditorRightsDTO
 * @version 0.7.2
 */
class DetailedEditorRightsDTO {
    /**
     * Constructs a new <code>DetailedEditorRightsDTO</code>.
     * @alias module:model/DetailedEditorRightsDTO
     * @param email {String} 
     * @param editionId {Number} 
     * @param mayLock {Boolean} 
     * @param mayRead {Boolean} 
     * @param mayWrite {Boolean} 
     * @param isAdmin {Boolean} 
     */
    constructor(email, editionId, mayLock, mayRead, mayWrite, isAdmin) { 
        
        DetailedEditorRightsDTO.initialize(this, email, editionId, mayLock, mayRead, mayWrite, isAdmin);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, editionId, mayLock, mayRead, mayWrite, isAdmin) { 
        obj['email'] = email;
        obj['editionId'] = editionId;
        obj['mayLock'] = mayLock;
        obj['mayRead'] = mayRead;
        obj['mayWrite'] = mayWrite;
        obj['isAdmin'] = isAdmin;
    }

    /**
     * Constructs a <code>DetailedEditorRightsDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetailedEditorRightsDTO} obj Optional instance to populate.
     * @return {module:model/DetailedEditorRightsDTO} The populated <code>DetailedEditorRightsDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetailedEditorRightsDTO();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('editionId')) {
                obj['editionId'] = ApiClient.convertToType(data['editionId'], 'Number');
            }
            if (data.hasOwnProperty('mayLock')) {
                obj['mayLock'] = ApiClient.convertToType(data['mayLock'], 'Boolean');
            }
            if (data.hasOwnProperty('mayRead')) {
                obj['mayRead'] = ApiClient.convertToType(data['mayRead'], 'Boolean');
            }
            if (data.hasOwnProperty('mayWrite')) {
                obj['mayWrite'] = ApiClient.convertToType(data['mayWrite'], 'Boolean');
            }
            if (data.hasOwnProperty('isAdmin')) {
                obj['isAdmin'] = ApiClient.convertToType(data['isAdmin'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
DetailedEditorRightsDTO.prototype['email'] = undefined;

/**
 * @member {Number} editionId
 */
DetailedEditorRightsDTO.prototype['editionId'] = undefined;

/**
 * @member {Boolean} mayLock
 */
DetailedEditorRightsDTO.prototype['mayLock'] = undefined;

/**
 * @member {Boolean} mayRead
 */
DetailedEditorRightsDTO.prototype['mayRead'] = undefined;

/**
 * @member {Boolean} mayWrite
 */
DetailedEditorRightsDTO.prototype['mayWrite'] = undefined;

/**
 * @member {Boolean} isAdmin
 */
DetailedEditorRightsDTO.prototype['isAdmin'] = undefined;






export default DetailedEditorRightsDTO;

