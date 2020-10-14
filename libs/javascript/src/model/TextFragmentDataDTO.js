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
 * The TextFragmentDataDTO model module.
 * @module model/TextFragmentDataDTO
 * @version 0.7.2
 */
class TextFragmentDataDTO {
    /**
     * Constructs a new <code>TextFragmentDataDTO</code>.
     * @alias module:model/TextFragmentDataDTO
     * @param id {Number} 
     * @param name {String} 
     * @param editorId {Number} 
     */
    constructor(id, name, editorId) { 
        
        TextFragmentDataDTO.initialize(this, id, name, editorId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, editorId) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['editorId'] = editorId;
    }

    /**
     * Constructs a <code>TextFragmentDataDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextFragmentDataDTO} obj Optional instance to populate.
     * @return {module:model/TextFragmentDataDTO} The populated <code>TextFragmentDataDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextFragmentDataDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('editorId')) {
                obj['editorId'] = ApiClient.convertToType(data['editorId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
TextFragmentDataDTO.prototype['id'] = undefined;

/**
 * @member {String} name
 */
TextFragmentDataDTO.prototype['name'] = undefined;

/**
 * @member {Number} editorId
 */
TextFragmentDataDTO.prototype['editorId'] = undefined;






export default TextFragmentDataDTO;

