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
 * The UpdateAttributeValueDTO model module.
 * @module model/UpdateAttributeValueDTO
 * @version v1
 */
class UpdateAttributeValueDTO {
    /**
     * Constructs a new <code>UpdateAttributeValueDTO</code>.
     * @alias module:model/UpdateAttributeValueDTO
     * @param id {Number} 
     * @param value {String} 
     */
    constructor(id, value) { 
        
        UpdateAttributeValueDTO.initialize(this, id, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, value) { 
        obj['id'] = id;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>UpdateAttributeValueDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAttributeValueDTO} obj Optional instance to populate.
     * @return {module:model/UpdateAttributeValueDTO} The populated <code>UpdateAttributeValueDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAttributeValueDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('cssDirectives')) {
                obj['cssDirectives'] = ApiClient.convertToType(data['cssDirectives'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
UpdateAttributeValueDTO.prototype['id'] = undefined;

/**
 * @member {String} value
 */
UpdateAttributeValueDTO.prototype['value'] = undefined;

/**
 * @member {String} description
 */
UpdateAttributeValueDTO.prototype['description'] = undefined;

/**
 * @member {String} cssDirectives
 */
UpdateAttributeValueDTO.prototype['cssDirectives'] = undefined;






export default UpdateAttributeValueDTO;

