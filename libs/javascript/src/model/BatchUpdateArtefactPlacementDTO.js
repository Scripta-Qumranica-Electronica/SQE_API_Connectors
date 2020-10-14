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
import UpdateArtefactPlacementDTO from './UpdateArtefactPlacementDTO';

/**
 * The BatchUpdateArtefactPlacementDTO model module.
 * @module model/BatchUpdateArtefactPlacementDTO
 * @version 0.7.2
 */
class BatchUpdateArtefactPlacementDTO {
    /**
     * Constructs a new <code>BatchUpdateArtefactPlacementDTO</code>.
     * @alias module:model/BatchUpdateArtefactPlacementDTO
     * @param artefactPlacements {Array.<module:model/UpdateArtefactPlacementDTO>} 
     */
    constructor(artefactPlacements) { 
        
        BatchUpdateArtefactPlacementDTO.initialize(this, artefactPlacements);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, artefactPlacements) { 
        obj['artefactPlacements'] = artefactPlacements;
    }

    /**
     * Constructs a <code>BatchUpdateArtefactPlacementDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchUpdateArtefactPlacementDTO} obj Optional instance to populate.
     * @return {module:model/BatchUpdateArtefactPlacementDTO} The populated <code>BatchUpdateArtefactPlacementDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchUpdateArtefactPlacementDTO();

            if (data.hasOwnProperty('artefactPlacements')) {
                obj['artefactPlacements'] = ApiClient.convertToType(data['artefactPlacements'], [UpdateArtefactPlacementDTO]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/UpdateArtefactPlacementDTO>} artefactPlacements
 */
BatchUpdateArtefactPlacementDTO.prototype['artefactPlacements'] = undefined;






export default BatchUpdateArtefactPlacementDTO;

