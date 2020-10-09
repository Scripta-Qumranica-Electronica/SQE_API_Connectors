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
import AttributeValueDTO from './AttributeValueDTO';

/**
 * The AttributeDTO model module.
 * @module model/AttributeDTO
 * @version v1
 */
class AttributeDTO {
    /**
     * Constructs a new <code>AttributeDTO</code>.
     * @alias module:model/AttributeDTO
     * @param attributeId {Number} 
     * @param attributeName {String} 
     * @param values {Array.<module:model/AttributeValueDTO>} 
     * @param creatorId {Number} 
     * @param editorId {Number} 
     */
    constructor(attributeId, attributeName, values, creatorId, editorId) { 
        
        AttributeDTO.initialize(this, attributeId, attributeName, values, creatorId, editorId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attributeId, attributeName, values, creatorId, editorId) { 
        obj['attributeId'] = attributeId;
        obj['attributeName'] = attributeName;
        obj['values'] = values;
        obj['creatorId'] = creatorId;
        obj['editorId'] = editorId;
    }

    /**
     * Constructs a <code>AttributeDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeDTO} obj Optional instance to populate.
     * @return {module:model/AttributeDTO} The populated <code>AttributeDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeDTO();

            if (data.hasOwnProperty('attributeId')) {
                obj['attributeId'] = ApiClient.convertToType(data['attributeId'], 'Number');
            }
            if (data.hasOwnProperty('attributeName')) {
                obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [AttributeValueDTO]);
            }
            if (data.hasOwnProperty('creatorId')) {
                obj['creatorId'] = ApiClient.convertToType(data['creatorId'], 'Number');
            }
            if (data.hasOwnProperty('editorId')) {
                obj['editorId'] = ApiClient.convertToType(data['editorId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('removable')) {
                obj['removable'] = ApiClient.convertToType(data['removable'], 'Boolean');
            }
            if (data.hasOwnProperty('repeatable')) {
                obj['repeatable'] = ApiClient.convertToType(data['repeatable'], 'Boolean');
            }
            if (data.hasOwnProperty('batchEditable')) {
                obj['batchEditable'] = ApiClient.convertToType(data['batchEditable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} attributeId
 */
AttributeDTO.prototype['attributeId'] = undefined;

/**
 * @member {String} attributeName
 */
AttributeDTO.prototype['attributeName'] = undefined;

/**
 * @member {Array.<module:model/AttributeValueDTO>} values
 */
AttributeDTO.prototype['values'] = undefined;

/**
 * @member {Number} creatorId
 */
AttributeDTO.prototype['creatorId'] = undefined;

/**
 * @member {Number} editorId
 */
AttributeDTO.prototype['editorId'] = undefined;

/**
 * @member {String} description
 */
AttributeDTO.prototype['description'] = undefined;

/**
 * @member {Boolean} editable
 */
AttributeDTO.prototype['editable'] = undefined;

/**
 * @member {Boolean} removable
 */
AttributeDTO.prototype['removable'] = undefined;

/**
 * @member {Boolean} repeatable
 */
AttributeDTO.prototype['repeatable'] = undefined;

/**
 * @member {Boolean} batchEditable
 */
AttributeDTO.prototype['batchEditable'] = undefined;






export default AttributeDTO;

