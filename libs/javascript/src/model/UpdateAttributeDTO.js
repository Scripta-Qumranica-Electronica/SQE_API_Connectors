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
import CreateAttributeValueDTO from './CreateAttributeValueDTO';
import UpdateAttributeValueDTO from './UpdateAttributeValueDTO';

/**
 * The UpdateAttributeDTO model module.
 * @module model/UpdateAttributeDTO
 * @version 0.7.0
 */
class UpdateAttributeDTO {
    /**
     * Constructs a new <code>UpdateAttributeDTO</code>.
     * @alias module:model/UpdateAttributeDTO
     * @param createValues {Array.<module:model/CreateAttributeValueDTO>} 
     * @param updateValues {Array.<module:model/UpdateAttributeValueDTO>} 
     * @param deleteValues {Array.<Number>} 
     */
    constructor(createValues, updateValues, deleteValues) { 
        
        UpdateAttributeDTO.initialize(this, createValues, updateValues, deleteValues);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createValues, updateValues, deleteValues) { 
        obj['createValues'] = createValues;
        obj['updateValues'] = updateValues;
        obj['deleteValues'] = deleteValues;
    }

    /**
     * Constructs a <code>UpdateAttributeDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAttributeDTO} obj Optional instance to populate.
     * @return {module:model/UpdateAttributeDTO} The populated <code>UpdateAttributeDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAttributeDTO();

            if (data.hasOwnProperty('createValues')) {
                obj['createValues'] = ApiClient.convertToType(data['createValues'], [CreateAttributeValueDTO]);
            }
            if (data.hasOwnProperty('updateValues')) {
                obj['updateValues'] = ApiClient.convertToType(data['updateValues'], [UpdateAttributeValueDTO]);
            }
            if (data.hasOwnProperty('deleteValues')) {
                obj['deleteValues'] = ApiClient.convertToType(data['deleteValues'], ['Number']);
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
 * @member {Array.<module:model/CreateAttributeValueDTO>} createValues
 */
UpdateAttributeDTO.prototype['createValues'] = undefined;

/**
 * @member {Array.<module:model/UpdateAttributeValueDTO>} updateValues
 */
UpdateAttributeDTO.prototype['updateValues'] = undefined;

/**
 * @member {Array.<Number>} deleteValues
 */
UpdateAttributeDTO.prototype['deleteValues'] = undefined;

/**
 * @member {Boolean} editable
 */
UpdateAttributeDTO.prototype['editable'] = undefined;

/**
 * @member {Boolean} removable
 */
UpdateAttributeDTO.prototype['removable'] = undefined;

/**
 * @member {Boolean} repeatable
 */
UpdateAttributeDTO.prototype['repeatable'] = undefined;

/**
 * @member {Boolean} batchEditable
 */
UpdateAttributeDTO.prototype['batchEditable'] = undefined;






export default UpdateAttributeDTO;

