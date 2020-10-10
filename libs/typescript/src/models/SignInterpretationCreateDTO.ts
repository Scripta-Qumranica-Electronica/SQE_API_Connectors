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
    CommentaryCreateDTO,
    CommentaryCreateDTOFromJSON,
    CommentaryCreateDTOFromJSONTyped,
    CommentaryCreateDTOToJSON,
    InterpretationAttributeCreateDTO,
    InterpretationAttributeCreateDTOFromJSON,
    InterpretationAttributeCreateDTOFromJSONTyped,
    InterpretationAttributeCreateDTOToJSON,
    SetInterpretationRoiDTO,
    SetInterpretationRoiDTOFromJSON,
    SetInterpretationRoiDTOFromJSONTyped,
    SetInterpretationRoiDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface SignInterpretationCreateDTO
 */
export interface SignInterpretationCreateDTO {
    /**
     * 
     * @type {number}
     * @memberof SignInterpretationCreateDTO
     */
    lineId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof SignInterpretationCreateDTO
     */
    previousSignInterpretationIds?: Array<number> | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof SignInterpretationCreateDTO
     */
    nextSignInterpretationIds?: Array<number> | null;
    /**
     * 
     * @type {Array<InterpretationAttributeCreateDTO>}
     * @memberof SignInterpretationCreateDTO
     */
    attributes: Array<InterpretationAttributeCreateDTO>;
    /**
     * 
     * @type {Array<SetInterpretationRoiDTO>}
     * @memberof SignInterpretationCreateDTO
     */
    rois: Array<SetInterpretationRoiDTO>;
    /**
     * 
     * @type {CommentaryCreateDTO}
     * @memberof SignInterpretationCreateDTO
     */
    commentary?: CommentaryCreateDTO | null;
    /**
     * 
     * @type {boolean}
     * @memberof SignInterpretationCreateDTO
     */
    breakPreviousAndNextSignInterpretations?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SignInterpretationCreateDTO
     */
    character?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SignInterpretationCreateDTO
     */
    isVariant: boolean;
}

export function SignInterpretationCreateDTOFromJSON(json: any): SignInterpretationCreateDTO {
    return SignInterpretationCreateDTOFromJSONTyped(json, false);
}

export function SignInterpretationCreateDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignInterpretationCreateDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'previousSignInterpretationIds': !exists(json, 'previousSignInterpretationIds') ? undefined : json['previousSignInterpretationIds'],
        'nextSignInterpretationIds': !exists(json, 'nextSignInterpretationIds') ? undefined : json['nextSignInterpretationIds'],
        'attributes': ((json['attributes'] as Array<any>).map(InterpretationAttributeCreateDTOFromJSON)),
        'rois': ((json['rois'] as Array<any>).map(SetInterpretationRoiDTOFromJSON)),
        'commentary': !exists(json, 'commentary') ? undefined : CommentaryCreateDTOFromJSON(json['commentary']),
        'breakPreviousAndNextSignInterpretations': !exists(json, 'breakPreviousAndNextSignInterpretations') ? undefined : json['breakPreviousAndNextSignInterpretations'],
        'character': !exists(json, 'character') ? undefined : json['character'],
        'isVariant': json['isVariant'],
    };
}

export function SignInterpretationCreateDTOToJSON(value?: SignInterpretationCreateDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineId': value.lineId,
        'previousSignInterpretationIds': value.previousSignInterpretationIds,
        'nextSignInterpretationIds': value.nextSignInterpretationIds,
        'attributes': ((value.attributes as Array<any>).map(InterpretationAttributeCreateDTOToJSON)),
        'rois': ((value.rois as Array<any>).map(SetInterpretationRoiDTOToJSON)),
        'commentary': CommentaryCreateDTOToJSON(value.commentary),
        'breakPreviousAndNextSignInterpretations': value.breakPreviousAndNextSignInterpretations,
        'character': value.character,
        'isVariant': value.isVariant,
    };
}

