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
 * The ArtefactGroupDTO model module.
 * @module model/ArtefactGroupDTO
 * @version 0.7.0
 */
class ArtefactGroupDTO {
    /**
     * Constructs a new <code>ArtefactGroupDTO</code>.
     * @alias module:model/ArtefactGroupDTO
     * @param id {Number} 
     * @param name {String} 
     * @param artefacts {Array.<Number>} 
     */
    constructor(id, name, artefacts) { 
        
        ArtefactGroupDTO.initialize(this, id, name, artefacts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, artefacts) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['artefacts'] = artefacts;
    }

    /**
     * Constructs a <code>ArtefactGroupDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArtefactGroupDTO} obj Optional instance to populate.
     * @return {module:model/ArtefactGroupDTO} The populated <code>ArtefactGroupDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArtefactGroupDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('artefacts')) {
                obj['artefacts'] = ApiClient.convertToType(data['artefacts'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ArtefactGroupDTO.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ArtefactGroupDTO.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} artefacts
 */
ArtefactGroupDTO.prototype['artefacts'] = undefined;






export default ArtefactGroupDTO;

