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
/**
 * 
 * @export
 * @interface NextSignInterpretationDTO
 */
export interface NextSignInterpretationDTO {
    /**
     * 
     * @type {number}
     * @memberof NextSignInterpretationDTO
     */
    nextSignInterpretationId: number;
    /**
     * 
     * @type {number}
     * @memberof NextSignInterpretationDTO
     */
    creatorId: number;
    /**
     * 
     * @type {number}
     * @memberof NextSignInterpretationDTO
     */
    editorId: number;
}

export function NextSignInterpretationDTOFromJSON(json: any): NextSignInterpretationDTO {
    return NextSignInterpretationDTOFromJSONTyped(json, false);
}

export function NextSignInterpretationDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NextSignInterpretationDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nextSignInterpretationId': json['nextSignInterpretationId'],
        'creatorId': json['creatorId'],
        'editorId': json['editorId'],
    };
}

export function NextSignInterpretationDTOToJSON(value?: NextSignInterpretationDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nextSignInterpretationId': value.nextSignInterpretationId,
        'creatorId': value.creatorId,
        'editorId': value.editorId,
    };
}


