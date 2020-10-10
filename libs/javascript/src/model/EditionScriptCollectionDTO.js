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
import CharacterShapeDTO from './CharacterShapeDTO';

/**
 * The EditionScriptCollectionDTO model module.
 * @module model/EditionScriptCollectionDTO
 * @version 0.7.0
 */
class EditionScriptCollectionDTO {
    /**
     * Constructs a new <code>EditionScriptCollectionDTO</code>.
     * @alias module:model/EditionScriptCollectionDTO
     * @param letters {Array.<module:model/CharacterShapeDTO>} 
     */
    constructor(letters) { 
        
        EditionScriptCollectionDTO.initialize(this, letters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, letters) { 
        obj['letters'] = letters;
    }

    /**
     * Constructs a <code>EditionScriptCollectionDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditionScriptCollectionDTO} obj Optional instance to populate.
     * @return {module:model/EditionScriptCollectionDTO} The populated <code>EditionScriptCollectionDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditionScriptCollectionDTO();

            if (data.hasOwnProperty('letters')) {
                obj['letters'] = ApiClient.convertToType(data['letters'], [CharacterShapeDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CharacterShapeDTO>} letters
 */
EditionScriptCollectionDTO.prototype['letters'] = undefined;






export default EditionScriptCollectionDTO;

