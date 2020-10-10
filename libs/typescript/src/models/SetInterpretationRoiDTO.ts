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
    TranslateDTO,
    TranslateDTOFromJSON,
    TranslateDTOFromJSONTyped,
    TranslateDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface SetInterpretationRoiDTO
 */
export interface SetInterpretationRoiDTO {
    /**
     * 
     * @type {number}
     * @memberof SetInterpretationRoiDTO
     */
    artefactId: number;
    /**
     * 
     * @type {number}
     * @memberof SetInterpretationRoiDTO
     */
    signInterpretationId: number;
    /**
     * 
     * @type {string}
     * @memberof SetInterpretationRoiDTO
     */
    shape: string;
    /**
     * 
     * @type {TranslateDTO}
     * @memberof SetInterpretationRoiDTO
     */
    translate: TranslateDTO;
    /**
     * 
     * @type {number}
     * @memberof SetInterpretationRoiDTO
     */
    stanceRotation?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SetInterpretationRoiDTO
     */
    exceptional: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SetInterpretationRoiDTO
     */
    valuesSet: boolean;
}

export function SetInterpretationRoiDTOFromJSON(json: any): SetInterpretationRoiDTO {
    return SetInterpretationRoiDTOFromJSONTyped(json, false);
}

export function SetInterpretationRoiDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetInterpretationRoiDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artefactId': json['artefactId'],
        'signInterpretationId': json['signInterpretationId'],
        'shape': json['shape'],
        'translate': TranslateDTOFromJSON(json['translate']),
        'stanceRotation': !exists(json, 'stanceRotation') ? undefined : json['stanceRotation'],
        'exceptional': json['exceptional'],
        'valuesSet': json['valuesSet'],
    };
}

export function SetInterpretationRoiDTOToJSON(value?: SetInterpretationRoiDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'artefactId': value.artefactId,
        'signInterpretationId': value.signInterpretationId,
        'shape': value.shape,
        'translate': TranslateDTOToJSON(value.translate),
        'stanceRotation': value.stanceRotation,
        'exceptional': value.exceptional,
        'valuesSet': value.valuesSet,
    };
}


