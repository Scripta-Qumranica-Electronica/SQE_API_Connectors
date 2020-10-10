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
import ScriptArtefactCharactersDTO from './ScriptArtefactCharactersDTO';

/**
 * The ScriptLineDTO model module.
 * @module model/ScriptLineDTO
 * @version 0.7.0
 */
class ScriptLineDTO {
    /**
     * Constructs a new <code>ScriptLineDTO</code>.
     * @alias module:model/ScriptLineDTO
     * @param lineName {String} 
     * @param lineId {Number} 
     * @param artefacts {Array.<module:model/ScriptArtefactCharactersDTO>} 
     */
    constructor(lineName, lineId, artefacts) { 
        
        ScriptLineDTO.initialize(this, lineName, lineId, artefacts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lineName, lineId, artefacts) { 
        obj['lineName'] = lineName;
        obj['lineId'] = lineId;
        obj['artefacts'] = artefacts;
    }

    /**
     * Constructs a <code>ScriptLineDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScriptLineDTO} obj Optional instance to populate.
     * @return {module:model/ScriptLineDTO} The populated <code>ScriptLineDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScriptLineDTO();

            if (data.hasOwnProperty('lineName')) {
                obj['lineName'] = ApiClient.convertToType(data['lineName'], 'String');
            }
            if (data.hasOwnProperty('lineId')) {
                obj['lineId'] = ApiClient.convertToType(data['lineId'], 'Number');
            }
            if (data.hasOwnProperty('artefacts')) {
                obj['artefacts'] = ApiClient.convertToType(data['artefacts'], [ScriptArtefactCharactersDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} lineName
 */
ScriptLineDTO.prototype['lineName'] = undefined;

/**
 * @member {Number} lineId
 */
ScriptLineDTO.prototype['lineId'] = undefined;

/**
 * @member {Array.<module:model/ScriptArtefactCharactersDTO>} artefacts
 */
ScriptLineDTO.prototype['artefacts'] = undefined;






export default ScriptLineDTO;

