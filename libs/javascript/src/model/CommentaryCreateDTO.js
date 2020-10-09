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
 * The CommentaryCreateDTO model module.
 * @module model/CommentaryCreateDTO
 * @version v1
 */
class CommentaryCreateDTO {
    /**
     * Constructs a new <code>CommentaryCreateDTO</code>.
     * @alias module:model/CommentaryCreateDTO
     */
    constructor() { 
        
        CommentaryCreateDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentaryCreateDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentaryCreateDTO} obj Optional instance to populate.
     * @return {module:model/CommentaryCreateDTO} The populated <code>CommentaryCreateDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentaryCreateDTO();

            if (data.hasOwnProperty('commentary')) {
                obj['commentary'] = ApiClient.convertToType(data['commentary'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} commentary
 */
CommentaryCreateDTO.prototype['commentary'] = undefined;






export default CommentaryCreateDTO;

