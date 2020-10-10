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
 * @interface CreateTextFragmentDTO
 */
export interface CreateTextFragmentDTO {
    /**
     * 
     * @type {string}
     * @memberof CreateTextFragmentDTO
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CreateTextFragmentDTO
     */
    previousTextFragmentId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTextFragmentDTO
     */
    nextTextFragmentId?: number | null;
}

export function CreateTextFragmentDTOFromJSON(json: any): CreateTextFragmentDTO {
    return CreateTextFragmentDTOFromJSONTyped(json, false);
}

export function CreateTextFragmentDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTextFragmentDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'previousTextFragmentId': !exists(json, 'previousTextFragmentId') ? undefined : json['previousTextFragmentId'],
        'nextTextFragmentId': !exists(json, 'nextTextFragmentId') ? undefined : json['nextTextFragmentId'],
    };
}

export function CreateTextFragmentDTOToJSON(value?: CreateTextFragmentDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'previousTextFragmentId': value.previousTextFragmentId,
        'nextTextFragmentId': value.nextTextFragmentId,
    };
}


