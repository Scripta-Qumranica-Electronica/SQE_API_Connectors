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
 * The AccountActivationRequestDTO model module.
 * @module model/AccountActivationRequestDTO
 * @version v1
 */
class AccountActivationRequestDTO {
    /**
     * Constructs a new <code>AccountActivationRequestDTO</code>.
     * @alias module:model/AccountActivationRequestDTO
     * @param token {String} 
     */
    constructor(token) { 
        
        AccountActivationRequestDTO.initialize(this, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>AccountActivationRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountActivationRequestDTO} obj Optional instance to populate.
     * @return {module:model/AccountActivationRequestDTO} The populated <code>AccountActivationRequestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountActivationRequestDTO();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
AccountActivationRequestDTO.prototype['token'] = undefined;






export default AccountActivationRequestDTO;

