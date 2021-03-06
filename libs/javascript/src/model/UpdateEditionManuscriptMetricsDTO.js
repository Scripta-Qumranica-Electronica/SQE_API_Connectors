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
 * The UpdateEditionManuscriptMetricsDTO model module.
 * @module model/UpdateEditionManuscriptMetricsDTO
 * @version 0.7.2
 */
class UpdateEditionManuscriptMetricsDTO {
    /**
     * Constructs a new <code>UpdateEditionManuscriptMetricsDTO</code>.
     * @alias module:model/UpdateEditionManuscriptMetricsDTO
     * @param width {Number} 
     * @param height {Number} 
     * @param xOrigin {Number} 
     * @param yOrigin {Number} 
     */
    constructor(width, height, xOrigin, yOrigin) { 
        
        UpdateEditionManuscriptMetricsDTO.initialize(this, width, height, xOrigin, yOrigin);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, width, height, xOrigin, yOrigin) { 
        obj['width'] = width;
        obj['height'] = height;
        obj['xOrigin'] = xOrigin;
        obj['yOrigin'] = yOrigin;
    }

    /**
     * Constructs a <code>UpdateEditionManuscriptMetricsDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEditionManuscriptMetricsDTO} obj Optional instance to populate.
     * @return {module:model/UpdateEditionManuscriptMetricsDTO} The populated <code>UpdateEditionManuscriptMetricsDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEditionManuscriptMetricsDTO();

            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('xOrigin')) {
                obj['xOrigin'] = ApiClient.convertToType(data['xOrigin'], 'Number');
            }
            if (data.hasOwnProperty('yOrigin')) {
                obj['yOrigin'] = ApiClient.convertToType(data['yOrigin'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} width
 */
UpdateEditionManuscriptMetricsDTO.prototype['width'] = undefined;

/**
 * @member {Number} height
 */
UpdateEditionManuscriptMetricsDTO.prototype['height'] = undefined;

/**
 * @member {Number} xOrigin
 */
UpdateEditionManuscriptMetricsDTO.prototype['xOrigin'] = undefined;

/**
 * @member {Number} yOrigin
 */
UpdateEditionManuscriptMetricsDTO.prototype['yOrigin'] = undefined;






export default UpdateEditionManuscriptMetricsDTO;

