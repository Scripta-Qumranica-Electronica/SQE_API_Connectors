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
import ArtefactTextFragmentMatchDTO from './ArtefactTextFragmentMatchDTO';

/**
 * The ArtefactTextFragmentMatchListDTO model module.
 * @module model/ArtefactTextFragmentMatchListDTO
 * @version 0.7.2
 */
class ArtefactTextFragmentMatchListDTO {
    /**
     * Constructs a new <code>ArtefactTextFragmentMatchListDTO</code>.
     * @alias module:model/ArtefactTextFragmentMatchListDTO
     * @param textFragments {Array.<module:model/ArtefactTextFragmentMatchDTO>} 
     */
    constructor(textFragments) { 
        
        ArtefactTextFragmentMatchListDTO.initialize(this, textFragments);
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
     * Constructs a <code>ArtefactTextFragmentMatchListDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArtefactTextFragmentMatchListDTO} obj Optional instance to populate.
     * @return {module:model/ArtefactTextFragmentMatchListDTO} The populated <code>ArtefactTextFragmentMatchListDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArtefactTextFragmentMatchListDTO();

            if (data.hasOwnProperty('textFragments')) {
                obj['textFragments'] = ApiClient.convertToType(data['textFragments'], [ArtefactTextFragmentMatchDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ArtefactTextFragmentMatchDTO>} textFragments
 */
ArtefactTextFragmentMatchListDTO.prototype['textFragments'] = undefined;






export default ArtefactTextFragmentMatchListDTO;

