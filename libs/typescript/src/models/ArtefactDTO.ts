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
    PlacementDTO,
    PlacementDTOFromJSON,
    PlacementDTOFromJSONTyped,
    PlacementDTOToJSON,
    SideDesignation,
    SideDesignationFromJSON,
    SideDesignationFromJSONTyped,
    SideDesignationToJSON,
} from './';

/**
 * 
 * @export
 * @interface ArtefactDTO
 */
export interface ArtefactDTO {
    /**
     * 
     * @type {number}
     * @memberof ArtefactDTO
     */
    editionId: number;
    /**
     * 
     * @type {string}
     * @memberof ArtefactDTO
     */
    imagedObjectId: string;
    /**
     * 
     * @type {number}
     * @memberof ArtefactDTO
     */
    imageId: number;
    /**
     * 
     * @type {number}
     * @memberof ArtefactDTO
     */
    artefactDataEditorId: number;
    /**
     * 
     * @type {string}
     * @memberof ArtefactDTO
     */
    mask: string;
    /**
     * 
     * @type {number}
     * @memberof ArtefactDTO
     */
    artefactMaskEditorId: number;
    /**
     * 
     * @type {boolean}
     * @memberof ArtefactDTO
     */
    isPlaced: boolean;
    /**
     * 
     * @type {PlacementDTO}
     * @memberof ArtefactDTO
     */
    placement: PlacementDTO;
    /**
     * 
     * @type {number}
     * @memberof ArtefactDTO
     */
    artefactPlacementEditorId?: number | null;
    /**
     * 
     * @type {SideDesignation}
     * @memberof ArtefactDTO
     */
    side: SideDesignation;
    /**
     * 
     * @type {string}
     * @memberof ArtefactDTO
     */
    statusMessage?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ArtefactDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ArtefactDTO
     */
    name: string;
}

export function ArtefactDTOFromJSON(json: any): ArtefactDTO {
    return ArtefactDTOFromJSONTyped(json, false);
}

export function ArtefactDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtefactDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'editionId': json['editionId'],
        'imagedObjectId': json['imagedObjectId'],
        'imageId': json['imageId'],
        'artefactDataEditorId': json['artefactDataEditorId'],
        'mask': json['mask'],
        'artefactMaskEditorId': json['artefactMaskEditorId'],
        'isPlaced': json['isPlaced'],
        'placement': PlacementDTOFromJSON(json['placement']),
        'artefactPlacementEditorId': !exists(json, 'artefactPlacementEditorId') ? undefined : json['artefactPlacementEditorId'],
        'side': SideDesignationFromJSON(json['side']),
        'statusMessage': !exists(json, 'statusMessage') ? undefined : json['statusMessage'],
        'id': json['id'],
        'name': json['name'],
    };
}

export function ArtefactDTOToJSON(value?: ArtefactDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'editionId': value.editionId,
        'imagedObjectId': value.imagedObjectId,
        'imageId': value.imageId,
        'artefactDataEditorId': value.artefactDataEditorId,
        'mask': value.mask,
        'artefactMaskEditorId': value.artefactMaskEditorId,
        'isPlaced': value.isPlaced,
        'placement': PlacementDTOToJSON(value.placement),
        'artefactPlacementEditorId': value.artefactPlacementEditorId,
        'side': SideDesignationToJSON(value.side),
        'statusMessage': value.statusMessage,
        'id': value.id,
        'name': value.name,
    };
}


