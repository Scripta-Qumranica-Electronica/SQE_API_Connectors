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
import TranslateDTO from './TranslateDTO';

/**
 * The SetInterpretationRoiDTO model module.
 * @module model/SetInterpretationRoiDTO
 * @version 0.7.2
 */
class SetInterpretationRoiDTO {
    /**
     * Constructs a new <code>SetInterpretationRoiDTO</code>.
     * @alias module:model/SetInterpretationRoiDTO
     * @param artefactId {Number} 
     * @param signInterpretationId {Number} 
     * @param shape {String} 
     * @param translate {module:model/TranslateDTO} 
     * @param exceptional {Boolean} 
     * @param valuesSet {Boolean} 
     */
    constructor(artefactId, signInterpretationId, shape, translate, exceptional, valuesSet) { 
        
        SetInterpretationRoiDTO.initialize(this, artefactId, signInterpretationId, shape, translate, exceptional, valuesSet);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, artefactId, signInterpretationId, shape, translate, exceptional, valuesSet) { 
        obj['artefactId'] = artefactId;
        obj['signInterpretationId'] = signInterpretationId;
        obj['shape'] = shape;
        obj['translate'] = translate;
        obj['exceptional'] = exceptional;
        obj['valuesSet'] = valuesSet;
    }

    /**
     * Constructs a <code>SetInterpretationRoiDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetInterpretationRoiDTO} obj Optional instance to populate.
     * @return {module:model/SetInterpretationRoiDTO} The populated <code>SetInterpretationRoiDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetInterpretationRoiDTO();

            if (data.hasOwnProperty('artefactId')) {
                obj['artefactId'] = ApiClient.convertToType(data['artefactId'], 'Number');
            }
            if (data.hasOwnProperty('signInterpretationId')) {
                obj['signInterpretationId'] = ApiClient.convertToType(data['signInterpretationId'], 'Number');
            }
            if (data.hasOwnProperty('shape')) {
                obj['shape'] = ApiClient.convertToType(data['shape'], 'String');
            }
            if (data.hasOwnProperty('translate')) {
                obj['translate'] = ApiClient.convertToType(data['translate'], TranslateDTO);
            }
            if (data.hasOwnProperty('stanceRotation')) {
                obj['stanceRotation'] = ApiClient.convertToType(data['stanceRotation'], 'Number');
            }
            if (data.hasOwnProperty('exceptional')) {
                obj['exceptional'] = ApiClient.convertToType(data['exceptional'], 'Boolean');
            }
            if (data.hasOwnProperty('valuesSet')) {
                obj['valuesSet'] = ApiClient.convertToType(data['valuesSet'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} artefactId
 */
SetInterpretationRoiDTO.prototype['artefactId'] = undefined;

/**
 * @member {Number} signInterpretationId
 */
SetInterpretationRoiDTO.prototype['signInterpretationId'] = undefined;

/**
 * @member {String} shape
 */
SetInterpretationRoiDTO.prototype['shape'] = undefined;

/**
 * @member {module:model/TranslateDTO} translate
 */
SetInterpretationRoiDTO.prototype['translate'] = undefined;

/**
 * @member {Number} stanceRotation
 */
SetInterpretationRoiDTO.prototype['stanceRotation'] = undefined;

/**
 * @member {Boolean} exceptional
 */
SetInterpretationRoiDTO.prototype['exceptional'] = undefined;

/**
 * @member {Boolean} valuesSet
 */
SetInterpretationRoiDTO.prototype['valuesSet'] = undefined;






export default SetInterpretationRoiDTO;

