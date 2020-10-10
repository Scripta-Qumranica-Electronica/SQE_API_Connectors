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
    TextFragmentDataDTO,
    TextFragmentDataDTOFromJSON,
    TextFragmentDataDTOFromJSONTyped,
    TextFragmentDataDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface TextFragmentDataListDTO
 */
export interface TextFragmentDataListDTO {
    /**
     * 
     * @type {Array<TextFragmentDataDTO>}
     * @memberof TextFragmentDataListDTO
     */
    textFragments: Array<TextFragmentDataDTO>;
}

export function TextFragmentDataListDTOFromJSON(json: any): TextFragmentDataListDTO {
    return TextFragmentDataListDTOFromJSONTyped(json, false);
}

export function TextFragmentDataListDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextFragmentDataListDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'textFragments': ((json['textFragments'] as Array<any>).map(TextFragmentDataDTOFromJSON)),
    };
}

export function TextFragmentDataListDTOToJSON(value?: TextFragmentDataListDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'textFragments': ((value.textFragments as Array<any>).map(TextFragmentDataDTOToJSON)),
    };
}

