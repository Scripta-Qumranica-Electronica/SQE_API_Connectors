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
import EditorDTO from './EditorDTO';
import SignDTO from './SignDTO';

/**
 * The LineTextDTO model module.
 * @module model/LineTextDTO
 * @version v1
 */
class LineTextDTO {
    /**
     * Constructs a new <code>LineTextDTO</code>.
     * @alias module:model/LineTextDTO
     * @param licence {String} 
     * @param editors {Object.<String, module:model/EditorDTO>} 
     * @param lineId {Number} 
     * @param lineName {String} 
     * @param editorId {Number} 
     * @param signs {Array.<module:model/SignDTO>} 
     */
    constructor(licence, editors, lineId, lineName, editorId, signs) { 
        
        LineTextDTO.initialize(this, licence, editors, lineId, lineName, editorId, signs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, licence, editors, lineId, lineName, editorId, signs) { 
        obj['licence'] = licence;
        obj['editors'] = editors;
        obj['lineId'] = lineId;
        obj['lineName'] = lineName;
        obj['editorId'] = editorId;
        obj['signs'] = signs;
    }

    /**
     * Constructs a <code>LineTextDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LineTextDTO} obj Optional instance to populate.
     * @return {module:model/LineTextDTO} The populated <code>LineTextDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LineTextDTO();

            if (data.hasOwnProperty('licence')) {
                obj['licence'] = ApiClient.convertToType(data['licence'], 'String');
            }
            if (data.hasOwnProperty('editors')) {
                obj['editors'] = ApiClient.convertToType(data['editors'], {'String': EditorDTO});
            }
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
 * @member {String} licence
 */
LineTextDTO.prototype['licence'] = undefined;

/**
 * @member {Object.<String, module:model/EditorDTO>} editors
 */
LineTextDTO.prototype['editors'] = undefined;

/**
 * @member {Number} lineId
 */
LineTextDTO.prototype['lineId'] = undefined;

/**
 * @member {String} lineName
 */
LineTextDTO.prototype['lineName'] = undefined;

/**
 * @member {Number} editorId
 */
LineTextDTO.prototype['editorId'] = undefined;

/**
 * @member {Array.<module:model/SignDTO>} signs
 */
LineTextDTO.prototype['signs'] = undefined;






export default LineTextDTO;
