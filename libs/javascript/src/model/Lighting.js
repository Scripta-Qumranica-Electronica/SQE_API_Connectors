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
* Enum class Lighting.
* @enum {}
* @readonly
*/
export default class Lighting {
    
        /**
         * value: 0
         * @const
         */
        "0" = 0;

    
        /**
         * value: 1
         * @const
         */
        "1" = 1;

    

    /**
    * Returns a <code>Lighting</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Lighting} The enum <code>Lighting</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

