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
 * The EditionManuscriptMetricsDTO model module.
 * @module model/EditionManuscriptMetricsDTO
 * @version 0.7.2
 */
class EditionManuscriptMetricsDTO {
    /**
     * Constructs a new <code>EditionManuscriptMetricsDTO</code>.
     * @alias module:model/EditionManuscriptMetricsDTO
     * @param ppi {Number} 
     * @param editorId {Number} 
     * @param width {Number} 
     * @param height {Number} 
     * @param xOrigin {Number} 
     * @param yOrigin {Number} 
     */
    constructor(ppi, editorId, width, height, xOrigin, yOrigin) { 
        
        EditionManuscriptMetricsDTO.initialize(this, ppi, editorId, width, height, xOrigin, yOrigin);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ppi, editorId, width, height, xOrigin, yOrigin) { 
        obj['ppi'] = ppi;
        obj['editorId'] = editorId;
        obj['width'] = width;
        obj['height'] = height;
        obj['xOrigin'] = xOrigin;
        obj['yOrigin'] = yOrigin;
    }

    /**
     * Constructs a <code>EditionManuscriptMetricsDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditionManuscriptMetricsDTO} obj Optional instance to populate.
     * @return {module:model/EditionManuscriptMetricsDTO} The populated <code>EditionManuscriptMetricsDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditionManuscriptMetricsDTO();

            if (data.hasOwnProperty('ppi')) {
                obj['ppi'] = ApiClient.convertToType(data['ppi'], 'Number');
            }
            if (data.hasOwnProperty('editorId')) {
                obj['editorId'] = ApiClient.convertToType(data['editorId'], 'Number');
            }
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
 * @member {Number} ppi
 */
EditionManuscriptMetricsDTO.prototype['ppi'] = undefined;

/**
 * @member {Number} editorId
 */
EditionManuscriptMetricsDTO.prototype['editorId'] = undefined;

/**
 * @member {Number} width
 */
EditionManuscriptMetricsDTO.prototype['width'] = undefined;

/**
 * @member {Number} height
 */
EditionManuscriptMetricsDTO.prototype['height'] = undefined;

/**
 * @member {Number} xOrigin
 */
EditionManuscriptMetricsDTO.prototype['xOrigin'] = undefined;

/**
 * @member {Number} yOrigin
 */
EditionManuscriptMetricsDTO.prototype['yOrigin'] = undefined;






export default EditionManuscriptMetricsDTO;

