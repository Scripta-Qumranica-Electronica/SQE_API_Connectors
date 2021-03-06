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
    EditionDTO,
    EditionDTOFromJSON,
    EditionDTOFromJSONTyped,
    EditionDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface EditionListDTO
 */
export interface EditionListDTO {
    /**
     * 
     * @type {Array<Array<EditionDTO>>}
     * @memberof EditionListDTO
     */
    editions: Array<Array<EditionDTO>>;
}

export function EditionListDTOFromJSON(json: any): EditionListDTO {
    return EditionListDTOFromJSONTyped(json, false);
}

export function EditionListDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditionListDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'editions': json['editions'],
    };
}

export function EditionListDTOToJSON(value?: EditionListDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'editions': value.editions,
    };
}


