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
import SideDesignation from './SideDesignation';

/**
 * The ImagedObjectTextFragmentMatchDTO model module.
 * @module model/ImagedObjectTextFragmentMatchDTO
 * @version v1
 */
class ImagedObjectTextFragmentMatchDTO {
    /**
     * Constructs a new <code>ImagedObjectTextFragmentMatchDTO</code>.
     * @alias module:model/ImagedObjectTextFragmentMatchDTO
     * @param editionId {Number} 
     * @param manuscriptName {String} 
     * @param textFragmentId {Number} 
     * @param textFragmentName {String} 
     * @param side {module:model/SideDesignation} 
     */
    constructor(editionId, manuscriptName, textFragmentId, textFragmentName, side) { 
        
        ImagedObjectTextFragmentMatchDTO.initialize(this, editionId, manuscriptName, textFragmentId, textFragmentName, side);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, editionId, manuscriptName, textFragmentId, textFragmentName, side) { 
        obj['editionId'] = editionId;
        obj['manuscriptName'] = manuscriptName;
        obj['textFragmentId'] = textFragmentId;
        obj['textFragmentName'] = textFragmentName;
        obj['side'] = side;
    }

    /**
     * Constructs a <code>ImagedObjectTextFragmentMatchDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImagedObjectTextFragmentMatchDTO} obj Optional instance to populate.
     * @return {module:model/ImagedObjectTextFragmentMatchDTO} The populated <code>ImagedObjectTextFragmentMatchDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImagedObjectTextFragmentMatchDTO();

            if (data.hasOwnProperty('editionId')) {
                obj['editionId'] = ApiClient.convertToType(data['editionId'], 'Number');
            }
            if (data.hasOwnProperty('manuscriptName')) {
                obj['manuscriptName'] = ApiClient.convertToType(data['manuscriptName'], 'String');
            }
            if (data.hasOwnProperty('textFragmentId')) {
                obj['textFragmentId'] = ApiClient.convertToType(data['textFragmentId'], 'Number');
            }
            if (data.hasOwnProperty('textFragmentName')) {
                obj['textFragmentName'] = ApiClient.convertToType(data['textFragmentName'], 'String');
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = ApiClient.convertToType(data['side'], SideDesignation);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} editionId
 */
ImagedObjectTextFragmentMatchDTO.prototype['editionId'] = undefined;

/**
 * @member {String} manuscriptName
 */
ImagedObjectTextFragmentMatchDTO.prototype['manuscriptName'] = undefined;

/**
 * @member {Number} textFragmentId
 */
ImagedObjectTextFragmentMatchDTO.prototype['textFragmentId'] = undefined;

/**
 * @member {String} textFragmentName
 */
ImagedObjectTextFragmentMatchDTO.prototype['textFragmentName'] = undefined;

/**
 * @member {module:model/SideDesignation} side
 */
ImagedObjectTextFragmentMatchDTO.prototype['side'] = undefined;






export default ImagedObjectTextFragmentMatchDTO;
