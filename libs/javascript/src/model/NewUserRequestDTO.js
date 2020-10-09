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
 * The NewUserRequestDTO model module.
 * @module model/NewUserRequestDTO
 * @version v1
 */
class NewUserRequestDTO {
    /**
     * Constructs a new <code>NewUserRequestDTO</code>.
     * @alias module:model/NewUserRequestDTO
     * @param email {String} 
     * @param password {String} 
     */
    constructor(email, password) { 
        
        NewUserRequestDTO.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['email'] = email;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>NewUserRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewUserRequestDTO} obj Optional instance to populate.
     * @return {module:model/NewUserRequestDTO} The populated <code>NewUserRequestDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewUserRequestDTO();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('forename')) {
                obj['forename'] = ApiClient.convertToType(data['forename'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
NewUserRequestDTO.prototype['email'] = undefined;

/**
 * @member {String} password
 */
NewUserRequestDTO.prototype['password'] = undefined;

/**
 * @member {String} organization
 */
NewUserRequestDTO.prototype['organization'] = undefined;

/**
 * @member {String} forename
 */
NewUserRequestDTO.prototype['forename'] = undefined;

/**
 * @member {String} surname
 */
NewUserRequestDTO.prototype['surname'] = undefined;






export default NewUserRequestDTO;

