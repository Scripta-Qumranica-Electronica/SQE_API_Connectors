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
 * The DetailedUserDTO model module.
 * @module model/DetailedUserDTO
 * @version v1
 */
class DetailedUserDTO {
    /**
     * Constructs a new <code>DetailedUserDTO</code>.
     * @alias module:model/DetailedUserDTO
     * @param activated {Boolean} 
     * @param userId {Number} 
     * @param email {String} 
     */
    constructor(activated, userId, email) { 
        
        DetailedUserDTO.initialize(this, activated, userId, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activated, userId, email) { 
        obj['activated'] = activated;
        obj['userId'] = userId;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>DetailedUserDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetailedUserDTO} obj Optional instance to populate.
     * @return {module:model/DetailedUserDTO} The populated <code>DetailedUserDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetailedUserDTO();

            if (data.hasOwnProperty('forename')) {
                obj['forename'] = ApiClient.convertToType(data['forename'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('activated')) {
                obj['activated'] = ApiClient.convertToType(data['activated'], 'Boolean');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} forename
 */
DetailedUserDTO.prototype['forename'] = undefined;

/**
 * @member {String} surname
 */
DetailedUserDTO.prototype['surname'] = undefined;

/**
 * @member {String} organization
 */
DetailedUserDTO.prototype['organization'] = undefined;

/**
 * @member {Boolean} activated
 */
DetailedUserDTO.prototype['activated'] = undefined;

/**
 * @member {Number} userId
 */
DetailedUserDTO.prototype['userId'] = undefined;

/**
 * @member {String} email
 */
DetailedUserDTO.prototype['email'] = undefined;






export default DetailedUserDTO;

