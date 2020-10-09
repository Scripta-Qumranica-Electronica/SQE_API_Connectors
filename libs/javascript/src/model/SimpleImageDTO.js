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
import Direction from './Direction';
import Lighting from './Lighting';
import SideDesignation from './SideDesignation';

/**
 * The SimpleImageDTO model module.
 * @module model/SimpleImageDTO
 * @version v1
 */
class SimpleImageDTO {
    /**
     * Constructs a new <code>SimpleImageDTO</code>.
     * @alias module:model/SimpleImageDTO
     * @param id {Number} 
     * @param url {String} 
     * @param lightingType {module:model/Lighting} 
     * @param lightingDirection {module:model/Direction} 
     * @param waveLength {Array.<String>} 
     * @param type {String} 
     * @param side {module:model/SideDesignation} 
     * @param ppi {Number} 
     * @param master {Boolean} 
     * @param catalogNumber {Number} 
     */
    constructor(id, url, lightingType, lightingDirection, waveLength, type, side, ppi, master, catalogNumber) { 
        
        SimpleImageDTO.initialize(this, id, url, lightingType, lightingDirection, waveLength, type, side, ppi, master, catalogNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, url, lightingType, lightingDirection, waveLength, type, side, ppi, master, catalogNumber) { 
        obj['id'] = id;
        obj['url'] = url;
        obj['lightingType'] = lightingType;
        obj['lightingDirection'] = lightingDirection;
        obj['waveLength'] = waveLength;
        obj['type'] = type;
        obj['side'] = side;
        obj['ppi'] = ppi;
        obj['master'] = master;
        obj['catalogNumber'] = catalogNumber;
    }

    /**
     * Constructs a <code>SimpleImageDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleImageDTO} obj Optional instance to populate.
     * @return {module:model/SimpleImageDTO} The populated <code>SimpleImageDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleImageDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('lightingType')) {
                obj['lightingType'] = ApiClient.convertToType(data['lightingType'], Lighting);
            }
            if (data.hasOwnProperty('lightingDirection')) {
                obj['lightingDirection'] = ApiClient.convertToType(data['lightingDirection'], Direction);
            }
            if (data.hasOwnProperty('waveLength')) {
                obj['waveLength'] = ApiClient.convertToType(data['waveLength'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = ApiClient.convertToType(data['side'], SideDesignation);
            }
            if (data.hasOwnProperty('ppi')) {
                obj['ppi'] = ApiClient.convertToType(data['ppi'], 'Number');
            }
            if (data.hasOwnProperty('master')) {
                obj['master'] = ApiClient.convertToType(data['master'], 'Boolean');
            }
            if (data.hasOwnProperty('catalogNumber')) {
                obj['catalogNumber'] = ApiClient.convertToType(data['catalogNumber'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
SimpleImageDTO.prototype['id'] = undefined;

/**
 * @member {String} url
 */
SimpleImageDTO.prototype['url'] = undefined;

/**
 * @member {module:model/Lighting} lightingType
 */
SimpleImageDTO.prototype['lightingType'] = undefined;

/**
 * @member {module:model/Direction} lightingDirection
 */
SimpleImageDTO.prototype['lightingDirection'] = undefined;

/**
 * @member {Array.<String>} waveLength
 */
SimpleImageDTO.prototype['waveLength'] = undefined;

/**
 * @member {String} type
 */
SimpleImageDTO.prototype['type'] = undefined;

/**
 * @member {module:model/SideDesignation} side
 */
SimpleImageDTO.prototype['side'] = undefined;

/**
 * @member {Number} ppi
 */
SimpleImageDTO.prototype['ppi'] = undefined;

/**
 * @member {Boolean} master
 */
SimpleImageDTO.prototype['master'] = undefined;

/**
 * @member {Number} catalogNumber
 */
SimpleImageDTO.prototype['catalogNumber'] = undefined;






export default SimpleImageDTO;

