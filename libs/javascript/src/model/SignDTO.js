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
import SignInterpretationDTO from './SignInterpretationDTO';

/**
 * The SignDTO model module.
 * @module model/SignDTO
 * @version 0.7.2
 */
class SignDTO {
    /**
     * Constructs a new <code>SignDTO</code>.
     * @alias module:model/SignDTO
     * @param signInterpretations {Array.<module:model/SignInterpretationDTO>} 
     */
    constructor(signInterpretations) { 
        
        SignDTO.initialize(this, signInterpretations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signInterpretations) { 
        obj['signInterpretations'] = signInterpretations;
    }

    /**
     * Constructs a <code>SignDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignDTO} obj Optional instance to populate.
     * @return {module:model/SignDTO} The populated <code>SignDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignDTO();

            if (data.hasOwnProperty('signInterpretations')) {
                obj['signInterpretations'] = ApiClient.convertToType(data['signInterpretations'], [SignInterpretationDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SignInterpretationDTO>} signInterpretations
 */
SignDTO.prototype['signInterpretations'] = undefined;






export default SignDTO;

