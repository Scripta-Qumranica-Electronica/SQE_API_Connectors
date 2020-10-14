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
import CommentaryDTO from './CommentaryDTO';
import InterpretationAttributeDTO from './InterpretationAttributeDTO';
import InterpretationRoiDTO from './InterpretationRoiDTO';
import NextSignInterpretationDTO from './NextSignInterpretationDTO';

/**
 * The SignInterpretationDTO model module.
 * @module model/SignInterpretationDTO
 * @version 0.7.2
 */
class SignInterpretationDTO {
    /**
     * Constructs a new <code>SignInterpretationDTO</code>.
     * @alias module:model/SignInterpretationDTO
     * @param signInterpretationId {Number} 
     * @param nextSignInterpretations {Array.<module:model/NextSignInterpretationDTO>} 
     * @param attributes {Array.<module:model/InterpretationAttributeDTO>} 
     * @param rois {Array.<module:model/InterpretationRoiDTO>} 
     * @param isVariant {Boolean} 
     */
    constructor(signInterpretationId, nextSignInterpretations, attributes, rois, isVariant) { 
        
        SignInterpretationDTO.initialize(this, signInterpretationId, nextSignInterpretations, attributes, rois, isVariant);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signInterpretationId, nextSignInterpretations, attributes, rois, isVariant) { 
        obj['signInterpretationId'] = signInterpretationId;
        obj['nextSignInterpretations'] = nextSignInterpretations;
        obj['attributes'] = attributes;
        obj['rois'] = rois;
        obj['isVariant'] = isVariant;
    }

    /**
     * Constructs a <code>SignInterpretationDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignInterpretationDTO} obj Optional instance to populate.
     * @return {module:model/SignInterpretationDTO} The populated <code>SignInterpretationDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignInterpretationDTO();

            if (data.hasOwnProperty('signInterpretationId')) {
                obj['signInterpretationId'] = ApiClient.convertToType(data['signInterpretationId'], 'Number');
            }
            if (data.hasOwnProperty('nextSignInterpretations')) {
                obj['nextSignInterpretations'] = ApiClient.convertToType(data['nextSignInterpretations'], [NextSignInterpretationDTO]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [InterpretationAttributeDTO]);
            }
            if (data.hasOwnProperty('rois')) {
                obj['rois'] = ApiClient.convertToType(data['rois'], [InterpretationRoiDTO]);
            }
            if (data.hasOwnProperty('commentary')) {
                obj['commentary'] = ApiClient.convertToType(data['commentary'], CommentaryDTO);
            }
            if (data.hasOwnProperty('character')) {
                obj['character'] = ApiClient.convertToType(data['character'], 'String');
            }
            if (data.hasOwnProperty('isVariant')) {
                obj['isVariant'] = ApiClient.convertToType(data['isVariant'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} signInterpretationId
 */
SignInterpretationDTO.prototype['signInterpretationId'] = undefined;

/**
 * @member {Array.<module:model/NextSignInterpretationDTO>} nextSignInterpretations
 */
SignInterpretationDTO.prototype['nextSignInterpretations'] = undefined;

/**
 * @member {Array.<module:model/InterpretationAttributeDTO>} attributes
 */
SignInterpretationDTO.prototype['attributes'] = undefined;

/**
 * @member {Array.<module:model/InterpretationRoiDTO>} rois
 */
SignInterpretationDTO.prototype['rois'] = undefined;

/**
 * @member {module:model/CommentaryDTO} commentary
 */
SignInterpretationDTO.prototype['commentary'] = undefined;

/**
 * @member {String} character
 */
SignInterpretationDTO.prototype['character'] = undefined;

/**
 * @member {Boolean} isVariant
 */
SignInterpretationDTO.prototype['isVariant'] = undefined;






export default SignInterpretationDTO;

