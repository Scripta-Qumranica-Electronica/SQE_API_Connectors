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
import EditionDTO from './EditionDTO';

/**
 * The EditionGroupDTO model module.
 * @module model/EditionGroupDTO
 * @version 0.7.0
 */
class EditionGroupDTO {
    /**
     * Constructs a new <code>EditionGroupDTO</code>.
     * @alias module:model/EditionGroupDTO
     * @param primary {module:model/EditionDTO} 
     * @param others {Array.<module:model/EditionDTO>} 
     */
    constructor(primary, others) { 
        
        EditionGroupDTO.initialize(this, primary, others);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, primary, others) { 
        obj['primary'] = primary;
        obj['others'] = others;
    }

    /**
     * Constructs a <code>EditionGroupDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditionGroupDTO} obj Optional instance to populate.
     * @return {module:model/EditionGroupDTO} The populated <code>EditionGroupDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditionGroupDTO();

            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], EditionDTO);
            }
            if (data.hasOwnProperty('others')) {
                obj['others'] = ApiClient.convertToType(data['others'], [EditionDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EditionDTO} primary
 */
EditionGroupDTO.prototype['primary'] = undefined;

/**
 * @member {Array.<module:model/EditionDTO>} others
 */
EditionGroupDTO.prototype['others'] = undefined;






export default EditionGroupDTO;

