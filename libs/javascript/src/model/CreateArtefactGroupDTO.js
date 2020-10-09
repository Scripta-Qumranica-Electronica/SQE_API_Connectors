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
 * The CreateArtefactGroupDTO model module.
 * @module model/CreateArtefactGroupDTO
 * @version v1
 */
class CreateArtefactGroupDTO {
    /**
     * Constructs a new <code>CreateArtefactGroupDTO</code>.
     * @alias module:model/CreateArtefactGroupDTO
     * @param name {String} 
     * @param artefacts {Array.<Number>} 
     */
    constructor(name, artefacts) { 
        
        CreateArtefactGroupDTO.initialize(this, name, artefacts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, artefacts) { 
        obj['name'] = name;
        obj['artefacts'] = artefacts;
    }

    /**
     * Constructs a <code>CreateArtefactGroupDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateArtefactGroupDTO} obj Optional instance to populate.
     * @return {module:model/CreateArtefactGroupDTO} The populated <code>CreateArtefactGroupDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateArtefactGroupDTO();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('artefacts')) {
                obj['artefacts'] = ApiClient.convertToType(data['artefacts'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateArtefactGroupDTO.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} artefacts
 */
CreateArtefactGroupDTO.prototype['artefacts'] = undefined;






export default CreateArtefactGroupDTO;

