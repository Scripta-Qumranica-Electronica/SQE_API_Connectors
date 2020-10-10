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
import CatalogueMatchDTO from './CatalogueMatchDTO';

/**
 * The CatalogueMatchListDTO model module.
 * @module model/CatalogueMatchListDTO
 * @version 0.7.0
 */
class CatalogueMatchListDTO {
    /**
     * Constructs a new <code>CatalogueMatchListDTO</code>.
     * @alias module:model/CatalogueMatchListDTO
     * @param matches {Array.<module:model/CatalogueMatchDTO>} 
     */
    constructor(matches) { 
        
        CatalogueMatchListDTO.initialize(this, matches);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, matches) { 
        obj['matches'] = matches;
    }

    /**
     * Constructs a <code>CatalogueMatchListDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogueMatchListDTO} obj Optional instance to populate.
     * @return {module:model/CatalogueMatchListDTO} The populated <code>CatalogueMatchListDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogueMatchListDTO();

            if (data.hasOwnProperty('matches')) {
                obj['matches'] = ApiClient.convertToType(data['matches'], [CatalogueMatchDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CatalogueMatchDTO>} matches
 */
CatalogueMatchListDTO.prototype['matches'] = undefined;






export default CatalogueMatchListDTO;

