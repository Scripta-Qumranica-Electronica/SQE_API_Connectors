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
import ScriptLineDTO from './ScriptLineDTO';

/**
 * The ScriptTextFragmentDTO model module.
 * @module model/ScriptTextFragmentDTO
 * @version 0.7.2
 */
class ScriptTextFragmentDTO {
    /**
     * Constructs a new <code>ScriptTextFragmentDTO</code>.
     * @alias module:model/ScriptTextFragmentDTO
     * @param textFragmentName {String} 
     * @param textFragmentId {Number} 
     * @param lines {Array.<module:model/ScriptLineDTO>} 
     */
    constructor(textFragmentName, textFragmentId, lines) { 
        
        ScriptTextFragmentDTO.initialize(this, textFragmentName, textFragmentId, lines);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, textFragmentName, textFragmentId, lines) { 
        obj['textFragmentName'] = textFragmentName;
        obj['textFragmentId'] = textFragmentId;
        obj['lines'] = lines;
    }

    /**
     * Constructs a <code>ScriptTextFragmentDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScriptTextFragmentDTO} obj Optional instance to populate.
     * @return {module:model/ScriptTextFragmentDTO} The populated <code>ScriptTextFragmentDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScriptTextFragmentDTO();

            if (data.hasOwnProperty('textFragmentName')) {
                obj['textFragmentName'] = ApiClient.convertToType(data['textFragmentName'], 'String');
            }
            if (data.hasOwnProperty('textFragmentId')) {
                obj['textFragmentId'] = ApiClient.convertToType(data['textFragmentId'], 'Number');
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], [ScriptLineDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} textFragmentName
 */
ScriptTextFragmentDTO.prototype['textFragmentName'] = undefined;

/**
 * @member {Number} textFragmentId
 */
ScriptTextFragmentDTO.prototype['textFragmentId'] = undefined;

/**
 * @member {Array.<module:model/ScriptLineDTO>} lines
 */
ScriptTextFragmentDTO.prototype['lines'] = undefined;






export default ScriptTextFragmentDTO;

