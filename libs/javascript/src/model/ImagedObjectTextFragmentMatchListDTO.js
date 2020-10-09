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
import ImagedObjectTextFragmentMatchDTO from './ImagedObjectTextFragmentMatchDTO';

/**
 * The ImagedObjectTextFragmentMatchListDTO model module.
 * @module model/ImagedObjectTextFragmentMatchListDTO
 * @version v1
 */
class ImagedObjectTextFragmentMatchListDTO {
    /**
     * Constructs a new <code>ImagedObjectTextFragmentMatchListDTO</code>.
     * @alias module:model/ImagedObjectTextFragmentMatchListDTO
     */
    constructor() { 
        
        ImagedObjectTextFragmentMatchListDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImagedObjectTextFragmentMatchListDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImagedObjectTextFragmentMatchListDTO} obj Optional instance to populate.
     * @return {module:model/ImagedObjectTextFragmentMatchListDTO} The populated <code>ImagedObjectTextFragmentMatchListDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImagedObjectTextFragmentMatchListDTO();

            if (data.hasOwnProperty('matches')) {
                obj['matches'] = ApiClient.convertToType(data['matches'], [ImagedObjectTextFragmentMatchDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ImagedObjectTextFragmentMatchDTO>} matches
 */
ImagedObjectTextFragmentMatchListDTO.prototype['matches'] = undefined;






export default ImagedObjectTextFragmentMatchListDTO;

