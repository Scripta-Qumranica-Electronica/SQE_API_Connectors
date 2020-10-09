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
 * The LineDataDTO model module.
 * @module model/LineDataDTO
 * @version v1
 */
class LineDataDTO {
    /**
     * Constructs a new <code>LineDataDTO</code>.
     * @alias module:model/LineDataDTO
     * @param lineId {Number} 
     * @param lineName {String} 
     */
    constructor(lineId, lineName) { 
        
        LineDataDTO.initialize(this, lineId, lineName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lineId, lineName) { 
        obj['lineId'] = lineId;
        obj['lineName'] = lineName;
    }

    /**
     * Constructs a <code>LineDataDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LineDataDTO} obj Optional instance to populate.
     * @return {module:model/LineDataDTO} The populated <code>LineDataDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LineDataDTO();

            if (data.hasOwnProperty('lineId')) {
                obj['lineId'] = ApiClient.convertToType(data['lineId'], 'Number');
            }
            if (data.hasOwnProperty('lineName')) {
                obj['lineName'] = ApiClient.convertToType(data['lineName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lineId
 */
LineDataDTO.prototype['lineId'] = undefined;

/**
 * @member {String} lineName
 */
LineDataDTO.prototype['lineName'] = undefined;






export default LineDataDTO;

