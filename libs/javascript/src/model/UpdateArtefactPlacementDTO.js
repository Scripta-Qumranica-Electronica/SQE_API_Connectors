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
import PlacementDTO from './PlacementDTO';

/**
 * The UpdateArtefactPlacementDTO model module.
 * @module model/UpdateArtefactPlacementDTO
 * @version 0.7.0
 */
class UpdateArtefactPlacementDTO {
    /**
     * Constructs a new <code>UpdateArtefactPlacementDTO</code>.
     * @alias module:model/UpdateArtefactPlacementDTO
     * @param artefactId {Number} 
     * @param isPlaced {Boolean} 
     */
    constructor(artefactId, isPlaced) { 
        
        UpdateArtefactPlacementDTO.initialize(this, artefactId, isPlaced);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, artefactId, isPlaced) { 
        obj['artefactId'] = artefactId;
        obj['isPlaced'] = isPlaced;
    }

    /**
     * Constructs a <code>UpdateArtefactPlacementDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateArtefactPlacementDTO} obj Optional instance to populate.
     * @return {module:model/UpdateArtefactPlacementDTO} The populated <code>UpdateArtefactPlacementDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateArtefactPlacementDTO();

            if (data.hasOwnProperty('artefactId')) {
                obj['artefactId'] = ApiClient.convertToType(data['artefactId'], 'Number');
            }
            if (data.hasOwnProperty('isPlaced')) {
                obj['isPlaced'] = ApiClient.convertToType(data['isPlaced'], 'Boolean');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], PlacementDTO);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} artefactId
 */
UpdateArtefactPlacementDTO.prototype['artefactId'] = undefined;

/**
 * @member {Boolean} isPlaced
 */
UpdateArtefactPlacementDTO.prototype['isPlaced'] = undefined;

/**
 * @member {module:model/PlacementDTO} placement
 */
UpdateArtefactPlacementDTO.prototype['placement'] = undefined;






export default UpdateArtefactPlacementDTO;

