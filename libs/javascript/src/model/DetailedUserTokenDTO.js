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
 * The DetailedUserTokenDTO model module.
 * @module model/DetailedUserTokenDTO
 * @version v1
 */
class DetailedUserTokenDTO {
    /**
     * Constructs a new <code>DetailedUserTokenDTO</code>.
     * @alias module:model/DetailedUserTokenDTO
     * @param token {String} 
     * @param activated {Boolean} 
     * @param userId {Number} 
     * @param email {String} 
     */
    constructor(token, activated, userId, email) { 
        
        DetailedUserTokenDTO.initialize(this, token, activated, userId, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token, activated, userId, email) { 
        obj['token'] = token;
        obj['activated'] = activated;
        obj['userId'] = userId;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>DetailedUserTokenDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetailedUserTokenDTO} obj Optional instance to populate.
     * @return {module:model/DetailedUserTokenDTO} The populated <code>DetailedUserTokenDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetailedUserTokenDTO();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
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
 * @member {String} token
 */
DetailedUserTokenDTO.prototype['token'] = undefined;

/**
 * @member {String} forename
 */
DetailedUserTokenDTO.prototype['forename'] = undefined;

/**
 * @member {String} surname
 */
DetailedUserTokenDTO.prototype['surname'] = undefined;

/**
 * @member {String} organization
 */
DetailedUserTokenDTO.prototype['organization'] = undefined;

/**
 * @member {Boolean} activated
 */
DetailedUserTokenDTO.prototype['activated'] = undefined;

/**
 * @member {Number} userId
 */
DetailedUserTokenDTO.prototype['userId'] = undefined;

/**
 * @member {String} email
 */
DetailedUserTokenDTO.prototype['email'] = undefined;






export default DetailedUserTokenDTO;

