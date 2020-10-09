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
import SignDTO from './SignDTO';

/**
 * The LineDTO model module.
 * @module model/LineDTO
 * @version v1
 */
class LineDTO {
    /**
     * Constructs a new <code>LineDTO</code>.
     * @alias module:model/LineDTO
     * @param lineId {Number} 
     * @param lineName {String} 
     * @param editorId {Number} 
     * @param signs {Array.<module:model/SignDTO>} 
     */
    constructor(lineId, lineName, editorId, signs) { 
        
        LineDTO.initialize(this, lineId, lineName, editorId, signs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lineId, lineName, editorId, signs) { 
        obj['lineId'] = lineId;
        obj['lineName'] = lineName;
        obj['editorId'] = editorId;
        obj['signs'] = signs;
    }

    /**
     * Constructs a <code>LineDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LineDTO} obj Optional instance to populate.
     * @return {module:model/LineDTO} The populated <code>LineDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LineDTO();

            if (data.hasOwnProperty('lineId')) {
                obj['lineId'] = ApiClient.convertToType(data['lineId'], 'Number');
            }
            if (data.hasOwnProperty('lineName')) {
                obj['lineName'] = ApiClient.convertToType(data['lineName'], 'String');
            }
            if (data.hasOwnProperty('editorId')) {
                obj['editorId'] = ApiClient.convertToType(data['editorId'], 'Number');
            }
            if (data.hasOwnProperty('signs')) {
                obj['signs'] = ApiClient.convertToType(data['signs'], [SignDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lineId
 */
LineDTO.prototype['lineId'] = undefined;

/**
 * @member {String} lineName
 */
LineDTO.prototype['lineName'] = undefined;

/**
 * @member {Number} editorId
 */
LineDTO.prototype['editorId'] = undefined;

/**
 * @member {Array.<module:model/SignDTO>} signs
 */
LineDTO.prototype['signs'] = undefined;






export default LineDTO;
