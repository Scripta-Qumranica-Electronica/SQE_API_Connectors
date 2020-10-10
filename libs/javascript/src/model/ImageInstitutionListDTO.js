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
import ImageInstitutionDTO from './ImageInstitutionDTO';

/**
 * The ImageInstitutionListDTO model module.
 * @module model/ImageInstitutionListDTO
 * @version 0.7.0
 */
class ImageInstitutionListDTO {
    /**
     * Constructs a new <code>ImageInstitutionListDTO</code>.
     * @alias module:model/ImageInstitutionListDTO
     * @param institutions {Array.<module:model/ImageInstitutionDTO>} 
     */
    constructor(institutions) { 
        
        ImageInstitutionListDTO.initialize(this, institutions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, institutions) { 
        obj['institutions'] = institutions;
    }

    /**
     * Constructs a <code>ImageInstitutionListDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageInstitutionListDTO} obj Optional instance to populate.
     * @return {module:model/ImageInstitutionListDTO} The populated <code>ImageInstitutionListDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageInstitutionListDTO();

            if (data.hasOwnProperty('institutions')) {
                obj['institutions'] = ApiClient.convertToType(data['institutions'], [ImageInstitutionDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ImageInstitutionDTO>} institutions
 */
ImageInstitutionListDTO.prototype['institutions'] = undefined;






export default ImageInstitutionListDTO;

