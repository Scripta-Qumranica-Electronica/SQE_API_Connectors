/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import {
    Direction,
    DirectionFromJSON,
    DirectionFromJSONTyped,
    DirectionToJSON,
    Lighting,
    LightingFromJSON,
    LightingFromJSONTyped,
    LightingToJSON,
    SideDesignation,
    SideDesignationFromJSON,
    SideDesignationFromJSONTyped,
    SideDesignationToJSON,
} from './';

/**
 * 
 * @export
 * @interface ImageDTO
 */
export interface ImageDTO {
    /**
     * 
     * @type {number}
     * @memberof ImageDTO
     */
    imageToImageMapEditorId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ImageDTO
     */
    regionInMasterImage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImageDTO
     */
    regionInImage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImageDTO
     */
    transformToMaster?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ImageDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ImageDTO
     */
    url: string;
    /**
     * 
     * @type {Lighting}
     * @memberof ImageDTO
     */
    lightingType: Lighting;
    /**
     * 
     * @type {Direction}
     * @memberof ImageDTO
     */
    lightingDirection: Direction;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImageDTO
     */
    waveLength: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ImageDTO
     */
    type: string;
    /**
     * 
     * @type {SideDesignation}
     * @memberof ImageDTO
     */
    side: SideDesignation;
    /**
     * 
     * @type {number}
     * @memberof ImageDTO
     */
    ppi: number;
    /**
     * 
     * @type {boolean}
     * @memberof ImageDTO
     */
    master: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImageDTO
     */
    catalogNumber: number;
}

export function ImageDTOFromJSON(json: any): ImageDTO {
    return ImageDTOFromJSONTyped(json, false);
}

export function ImageDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageToImageMapEditorId': !exists(json, 'imageToImageMapEditorId') ? undefined : json['imageToImageMapEditorId'],
        'regionInMasterImage': !exists(json, 'regionInMasterImage') ? undefined : json['regionInMasterImage'],
        'regionInImage': !exists(json, 'regionInImage') ? undefined : json['regionInImage'],
        'transformToMaster': !exists(json, 'transformToMaster') ? undefined : json['transformToMaster'],
        'id': json['id'],
        'url': json['url'],
        'lightingType': LightingFromJSON(json['lightingType']),
        'lightingDirection': DirectionFromJSON(json['lightingDirection']),
        'waveLength': json['waveLength'],
        'type': json['type'],
        'side': SideDesignationFromJSON(json['side']),
        'ppi': json['ppi'],
        'master': json['master'],
        'catalogNumber': json['catalogNumber'],
    };
}

export function ImageDTOToJSON(value?: ImageDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageToImageMapEditorId': value.imageToImageMapEditorId,
        'regionInMasterImage': value.regionInMasterImage,
        'regionInImage': value.regionInImage,
        'transformToMaster': value.transformToMaster,
        'id': value.id,
        'url': value.url,
        'lightingType': LightingToJSON(value.lightingType),
        'lightingDirection': DirectionToJSON(value.lightingDirection),
        'waveLength': value.waveLength,
        'type': value.type,
        'side': SideDesignationToJSON(value.side),
        'ppi': value.ppi,
        'master': value.master,
        'catalogNumber': value.catalogNumber,
    };
}


