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
 * The ResendUserAccountActivationRequestDTO model module.
 * @module model/ResendUserAccountActivationRequestDTO
 * @version 0.7.2
 */
class ResendUserAccountActivationRequestDTO {
    /**
     * Constructs a new <code>ResendUserAccountActivationRequestDTO</code>.
     * @alias module:model/ResendUserAccountActivationRequestDTO
     * @param email {String} 
     */
    constructor(email) { 
        
        ResendUserAccountActivationRequestDTO.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>ResendUserAccountActivationRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResendUserAccountActivationRequestDTO} obj Optional instance to populate.
     * @return {module:model/ResendUserAccountActivationRequestDTO} The populated <code>ResendUserAccountActivationRequestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResendUserAccountActivationRequestDTO();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
ResendUserAccountActivationRequestDTO.prototype['email'] = undefined;






export default ResendUserAccountActivationRequestDTO;

