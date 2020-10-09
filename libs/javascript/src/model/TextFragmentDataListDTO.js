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
import TextFragmentDataDTO from './TextFragmentDataDTO';

/**
 * The TextFragmentDataListDTO model module.
 * @module model/TextFragmentDataListDTO
 * @version v1
 */
class TextFragmentDataListDTO {
    /**
     * Constructs a new <code>TextFragmentDataListDTO</code>.
     * @alias module:model/TextFragmentDataListDTO
     * @param textFragments {Array.<module:model/TextFragmentDataDTO>} 
     */
    constructor(textFragments) { 
        
        TextFragmentDataListDTO.initialize(this, textFragments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, textFragments) { 
        obj['textFragments'] = textFragments;
    }

    /**
     * Constructs a <code>TextFragmentDataListDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextFragmentDataListDTO} obj Optional instance to populate.
     * @return {module:model/TextFragmentDataListDTO} The populated <code>TextFragmentDataListDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextFragmentDataListDTO();

            if (data.hasOwnProperty('textFragments')) {
                obj['textFragments'] = ApiClient.convertToType(data['textFragments'], [TextFragmentDataDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TextFragmentDataDTO>} textFragments
 */
TextFragmentDataListDTO.prototype['textFragments'] = undefined;






export default TextFragmentDataListDTO;

