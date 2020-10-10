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
    DetailedEditorRightsDTO,
    DetailedEditorRightsDTOFromJSON,
    DetailedEditorRightsDTOFromJSONTyped,
    DetailedEditorRightsDTOToJSON,
    EditionManuscriptMetricsDTO,
    EditionManuscriptMetricsDTOFromJSON,
    EditionManuscriptMetricsDTOFromJSONTyped,
    EditionManuscriptMetricsDTOToJSON,
    PermissionDTO,
    PermissionDTOFromJSON,
    PermissionDTOFromJSONTyped,
    PermissionDTOToJSON,
    UserDTO,
    UserDTOFromJSON,
    UserDTOFromJSONTyped,
    UserDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface EditionDTO
 */
export interface EditionDTO {
    /**
     * 
     * @type {number}
     * @memberof EditionDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof EditionDTO
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof EditionDTO
     */
    editionDataEditorId: number;
    /**
     * 
     * @type {PermissionDTO}
     * @memberof EditionDTO
     */
    permission: PermissionDTO;
    /**
     * 
     * @type {UserDTO}
     * @memberof EditionDTO
     */
    owner: UserDTO;
    /**
     * 
     * @type {string}
     * @memberof EditionDTO
     */
    thumbnailUrl?: string | null;
    /**
     * 
     * @type {Array<DetailedEditorRightsDTO>}
     * @memberof EditionDTO
     */
    shares: Array<DetailedEditorRightsDTO>;
    /**
     * 
     * @type {EditionManuscriptMetricsDTO}
     * @memberof EditionDTO
     */
    metrics: EditionManuscriptMetricsDTO;
    /**
     * 
     * @type {boolean}
     * @memberof EditionDTO
     */
    locked: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EditionDTO
     */
    isPublic: boolean;
    /**
     * 
     * @type {Date}
     * @memberof EditionDTO
     */
    lastEdit?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof EditionDTO
     */
    copyright: string;
}

export function EditionDTOFromJSON(json: any): EditionDTO {
    return EditionDTOFromJSONTyped(json, false);
}

export function EditionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'editionDataEditorId': json['editionDataEditorId'],
        'permission': PermissionDTOFromJSON(json['permission']),
        'owner': UserDTOFromJSON(json['owner']),
        'thumbnailUrl': !exists(json, 'thumbnailUrl') ? undefined : json['thumbnailUrl'],
        'shares': ((json['shares'] as Array<any>).map(DetailedEditorRightsDTOFromJSON)),
        'metrics': EditionManuscriptMetricsDTOFromJSON(json['metrics']),
        'locked': json['locked'],
        'isPublic': json['isPublic'],
        'lastEdit': !exists(json, 'lastEdit') ? undefined : (json['lastEdit'] === null ? null : new Date(json['lastEdit'])),
        'copyright': json['copyright'],
    };
}

export function EditionDTOToJSON(value?: EditionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'editionDataEditorId': value.editionDataEditorId,
        'permission': PermissionDTOToJSON(value.permission),
        'owner': UserDTOToJSON(value.owner),
        'thumbnailUrl': value.thumbnailUrl,
        'shares': ((value.shares as Array<any>).map(DetailedEditorRightsDTOToJSON)),
        'metrics': EditionManuscriptMetricsDTOToJSON(value.metrics),
        'locked': value.locked,
        'isPublic': value.isPublic,
        'lastEdit': value.lastEdit === undefined ? undefined : (value.lastEdit === null ? null : value.lastEdit.toISOString()),
        'copyright': value.copyright,
    };
}


