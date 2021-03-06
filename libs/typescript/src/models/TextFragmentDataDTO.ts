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
 * @interface TextFragmentDataDTO
 */
export interface TextFragmentDataDTO {
    /**
     * 
     * @type {number}
     * @memberof TextFragmentDataDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TextFragmentDataDTO
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof TextFragmentDataDTO
     */
    editorId: number;
}

export function TextFragmentDataDTOFromJSON(json: any): TextFragmentDataDTO {
    return TextFragmentDataDTOFromJSONTyped(json, false);
}

export function TextFragmentDataDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextFragmentDataDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'editorId': json['editorId'],
    };
}

export function TextFragmentDataDTOToJSON(value?: TextFragmentDataDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'editorId': value.editorId,
    };
}


