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
 * The InterpretationRoiDTO model module.
 * @module model/InterpretationRoiDTO
 * @version 0.7.0
 */
class InterpretationRoiDTO {
    /**
     * Constructs a new <code>InterpretationRoiDTO</code>.
     * @alias module:model/InterpretationRoiDTO
     * @param creatorId {Number} 
     * @param editorId {Number} 
     * @param interpretationRoiId {Number} 
     * @param artefactId {Number} 
     * @param signInterpretationId {Number} 
     * @param shape {String} 
     * @param translate {module:model/TranslateDTO} 
     * @param exceptional {Boolean} 
     * @param valuesSet {Boolean} 
     */
    constructor(creatorId, editorId, interpretationRoiId, artefactId, signInterpretationId, shape, translate, exceptional, valuesSet) { 
        
        InterpretationRoiDTO.initialize(this, creatorId, editorId, interpretationRoiId, artefactId, signInterpretationId, shape, translate, exceptional, valuesSet);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, creatorId, editorId, interpretationRoiId, artefactId, signInterpretationId, shape, translate, exceptional, valuesSet) { 
        obj['creatorId'] = creatorId;
        obj['editorId'] = editorId;
        obj['interpretationRoiId'] = interpretationRoiId;
        obj['artefactId'] = artefactId;
        obj['signInterpretationId'] = signInterpretationId;
        obj['shape'] = shape;
        obj['translate'] = translate;
        obj['exceptional'] = exceptional;
        obj['valuesSet'] = valuesSet;
    }

    /**
     * Constructs a <code>InterpretationRoiDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InterpretationRoiDTO} obj Optional instance to populate.
     * @return {module:model/InterpretationRoiDTO} The populated <code>InterpretationRoiDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InterpretationRoiDTO();

            if (data.hasOwnProperty('creatorId')) {
                obj['creatorId'] = ApiClient.convertToType(data['creatorId'], 'Number');
            }
            if (data.hasOwnProperty('editorId')) {
                obj['editorId'] = ApiClient.convertToType(data['editorId'], 'Number');
            }
            if (data.hasOwnProperty('interpretationRoiId')) {
                obj['interpretationRoiId'] = ApiClient.convertToType(data['interpretationRoiId'], 'Number');
            }
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
 * @member {Number} creatorId
 */
InterpretationRoiDTO.prototype['creatorId'] = undefined;

/**
 * @member {Number} editorId
 */
InterpretationRoiDTO.prototype['editorId'] = undefined;

/**
 * @member {Number} interpretationRoiId
 */
InterpretationRoiDTO.prototype['interpretationRoiId'] = undefined;

/**
 * @member {Number} artefactId
 */
InterpretationRoiDTO.prototype['artefactId'] = undefined;

/**
 * @member {Number} signInterpretationId
 */
InterpretationRoiDTO.prototype['signInterpretationId'] = undefined;

/**
 * @member {String} shape
 */
InterpretationRoiDTO.prototype['shape'] = undefined;

/**
 * @member {module:model/TranslateDTO} translate
 */
InterpretationRoiDTO.prototype['translate'] = undefined;

/**
 * @member {Number} stanceRotation
 */
InterpretationRoiDTO.prototype['stanceRotation'] = undefined;

/**
 * @member {Boolean} exceptional
 */
InterpretationRoiDTO.prototype['exceptional'] = undefined;

/**
 * @member {Boolean} valuesSet
 */
InterpretationRoiDTO.prototype['valuesSet'] = undefined;






export default InterpretationRoiDTO;

