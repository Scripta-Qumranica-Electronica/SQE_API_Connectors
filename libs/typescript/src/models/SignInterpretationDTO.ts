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
    CommentaryDTO,
    CommentaryDTOFromJSON,
    CommentaryDTOFromJSONTyped,
    CommentaryDTOToJSON,
    InterpretationAttributeDTO,
    InterpretationAttributeDTOFromJSON,
    InterpretationAttributeDTOFromJSONTyped,
    InterpretationAttributeDTOToJSON,
    InterpretationRoiDTO,
    InterpretationRoiDTOFromJSON,
    InterpretationRoiDTOFromJSONTyped,
    InterpretationRoiDTOToJSON,
    NextSignInterpretationDTO,
    NextSignInterpretationDTOFromJSON,
    NextSignInterpretationDTOFromJSONTyped,
    NextSignInterpretationDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface SignInterpretationDTO
 */
export interface SignInterpretationDTO {
    /**
     * 
     * @type {number}
     * @memberof SignInterpretationDTO
     */
    signInterpretationId: number;
    /**
     * 
     * @type {Array<NextSignInterpretationDTO>}
     * @memberof SignInterpretationDTO
     */
    nextSignInterpretations: Array<NextSignInterpretationDTO>;
    /**
     * 
     * @type {Array<InterpretationAttributeDTO>}
     * @memberof SignInterpretationDTO
     */
    attributes: Array<InterpretationAttributeDTO>;
    /**
     * 
     * @type {Array<InterpretationRoiDTO>}
     * @memberof SignInterpretationDTO
     */
    rois: Array<InterpretationRoiDTO>;
    /**
     * 
     * @type {CommentaryDTO}
     * @memberof SignInterpretationDTO
     */
    commentary?: CommentaryDTO | null;
    /**
     * 
     * @type {string}
     * @memberof SignInterpretationDTO
     */
    character?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SignInterpretationDTO
     */
    isVariant: boolean;
}

export function SignInterpretationDTOFromJSON(json: any): SignInterpretationDTO {
    return SignInterpretationDTOFromJSONTyped(json, false);
}

export function SignInterpretationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignInterpretationDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signInterpretationId': json['signInterpretationId'],
        'nextSignInterpretations': ((json['nextSignInterpretations'] as Array<any>).map(NextSignInterpretationDTOFromJSON)),
        'attributes': ((json['attributes'] as Array<any>).map(InterpretationAttributeDTOFromJSON)),
        'rois': ((json['rois'] as Array<any>).map(InterpretationRoiDTOFromJSON)),
        'commentary': !exists(json, 'commentary') ? undefined : CommentaryDTOFromJSON(json['commentary']),
        'character': !exists(json, 'character') ? undefined : json['character'],
        'isVariant': json['isVariant'],
    };
}

export function SignInterpretationDTOToJSON(value?: SignInterpretationDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signInterpretationId': value.signInterpretationId,
        'nextSignInterpretations': ((value.nextSignInterpretations as Array<any>).map(NextSignInterpretationDTOToJSON)),
        'attributes': ((value.attributes as Array<any>).map(InterpretationAttributeDTOToJSON)),
        'rois': ((value.rois as Array<any>).map(InterpretationRoiDTOToJSON)),
        'commentary': CommentaryDTOToJSON(value.commentary),
        'character': value.character,
        'isVariant': value.isVariant,
    };
}


